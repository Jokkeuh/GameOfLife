using GameOfLife.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.CodeAnalysis.Scripting;
using System.Drawing;

namespace GameOfLife.Controllers
{
    public class GameController : Controller
    {
        private readonly ILogger _logger;
        private readonly IService service;
        private readonly IHubContext<GameHub> _hubContext;
        private const int Rows = 50;
        private const int Columns = 50;
        public int countLife = 0;
        Cell[,]? grid { get; set; }



        public GameController(ILogger<GameController> logger, IService service, IHubContext<GameHub> hubContext)
        {
            

            _logger = logger;
            this.service = service;
            _hubContext = hubContext;
            try
            {
                this.service.InitializeGrid(Rows, Columns);
                grid = new Cell[Rows, Columns];
            for (int i = 0; i < Rows; i++)
            {
                for (int j = 0; j < Columns; j++)
                {
                    grid[i, j] = new Cell(service.grid[i, j].IsAlive, service.grid[i,j].Color);
                }
            };
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }
        public ActionResult Index()
        {
            
            ViewBag.Rows = Rows;
            ViewBag.Columns = Columns;
            return View(service.grid);
        }
        [HttpGet]
        public async Task<JsonResult> GetUpdatedGrid()
        {
            
            

            var gridDto = new GridDto
            {
                CellStates = new List<List<CellState>>()
            };

            for (int row = 0; row < Rows; row++)
            {
                var rowlist = new List<CellState>();
                for (int col = 0; col < Columns; col++)
                {
                    var cell = grid?[row, col];
                    rowlist.Add(new CellState(grid?[row, col]?.IsAlive ?? false, grid?[row, col]?.Color));
                }
                gridDto.CellStates.Add(rowlist);
            }
            
            UpdateGrid();
            await _hubContext.Clients.All.SendAsync("UpdateGrid", gridDto);
            return Json(gridDto);
        }
      

        [HttpPost]
        public async Task<JsonResult> MakeCellAlive(int row, int col, int[][] pattern)
        {
            
            service.ForceAliveCell(row, col, pattern);

            var gridDto = new GridDto
            {
                CellStates = new List<List<CellState>>()
            };

            for (int r = 0; r < Rows; r++)
            {
                var rowList = new List<CellState>();
                for (int c = 0; c < Columns; c++)
                {
                    var cell = grid?[row, col];
                    //rowList.Add((cell.IsAlive, default));
                    rowList.Add(new CellState(grid?[r, c]?.IsAlive ?? false, grid?[row, col]?.Color));
                }
                gridDto.CellStates.Add(rowList);
            }
            
            await _hubContext.Clients.All.SendAsync("UpdateGrid", gridDto);

            return Json(gridDto);
        }







        public enum Colors
        {
            Red, Green, Blue
        };

        string currentColor;

        public string GetRandomColorName()
        {
            int random = new Random().Next(0, 4);
            foreach (Colors color in Enum.GetValues(typeof(Colors)))
            {
                if ((int)color == random)
                {
                    currentColor = color.ToString();
                }
            }
            return currentColor;
        }
        private void UpdateGrid()
        {
            






        // init empty array
        Cell[,] newGrid = new Cell[Rows, Columns];
            for (int i = 0; i < Rows; i++)
            {
                for (int j = 0; j < Columns; j++)
                {
                    newGrid[i, j] = new Cell(false, Color.Black.Name);
                }
            }

            for (int row = 0; row < Rows; row++)
            {
                for (int col = 0; col < Columns; col++)
                {
                    int liveBuren = CountLiveBuren(row, col);
                    var currColor = newGrid[row,col].Color;
                    // Check the current state of the cell
                    bool isAlive = grid?[row, col]?.IsAlive ?? false;

                    // Apply the Game of Life rules
                    if (isAlive)
                    {
                        if (liveBuren < 2 || liveBuren > 3)
                        {
                            newGrid[row, col].IsAlive = false; // Cell dies
                            newGrid[row, col].Color = Color.Black.Name;
                        }
                        else
                        {
                            
                            newGrid[row, col].IsAlive = true; // Cell survives

                            newGrid[row, col].Color = GetRandomColorName();
                        }
                    }
                    else
                    {
                        if (liveBuren == 3)
                        {
                            newGrid[row, col].IsAlive = true; // Cell is born
                            newGrid[row, col].Color = GetRandomColorName();

                        }
                        else
                        {
                            newGrid[row, col].IsAlive = false; // Cell remains dead
                            newGrid[row, col].Color = Color.Black.Name;

                        }
                    }
                }
            }
            
            
            service.UpdateGrid( newGrid );
            grid = service.grid;
            countLife++;
        }


        [HttpPost]
        public IActionResult MakeAllCellsDead()
        {
            service.ClearMap();
            return RedirectToAction("Index"); 
        }



        private int CountLiveBuren(int row, int col)
        {
            int liveBuur = 0;

            for (int i = -1; i <= 1; i++)
            {
                for (int j = -1; j <= 1; j++)
                {
                    if (!(i == 0 && j == 0))
                    {
                        int newRow = (row + i + Rows) % Rows;
                        int newCol = (col + j + Columns) % Columns;

                        // Check if the cell is within bounds
                        if (newRow >= 0 && newRow < Rows && newCol >= 0 && newCol < Columns)
                        {
                            // Check if the cell is not null and is alive
                            if (grid?[newRow, newCol] != null && grid[newRow, newCol].IsAlive)
                            {
                                liveBuur++;
                                
                            }
                        }
                    }
                }
            }
            return liveBuur;
        }

        private void PropagateColor()
        {
            // Iterate over each cell in the grid
            for (int row = 0; row < Rows; row++)
            {
                for (int col = 0; col < Columns; col++)
                {
                    // Get the current cell
                    Cell currentCell = grid[row, col];

                    // If the cell is alive and has a color, propagate the color to its neighbors
                    if (currentCell.IsAlive && currentCell.Color != string.Empty)
                    {
                        PropagateColorToNeighbors(row, col, Color.Red.Name);
                    }
                }
            }
        }

        private void PropagateColorToNeighbors(int row, int col, string color)
        {
            // Define the neighborhood offsets
            int[] dx = { -1, 0, 1, -1, 1, -1, 0, 1 };
            int[] dy = { -1, -1, -1, 0, 0, 1, 1, 1 };

            // Iterate over the neighbors
            for (int i = 0; i < dx.Length; i++)
            {
                int newRow = row + dx[i];
                int newCol = col + dy[i];

                // Check if the neighbor is within bounds
                if (newRow >= 0 && newRow < Rows && newCol >= 0 && newCol < Columns)
                {
                    // Get the neighbor cell
                    Cell neighborCell = grid[newRow, newCol];

                    // If the neighbor is not already colored, propagate the color to it
                    if (!neighborCell.IsAlive || neighborCell.Color == String.Empty)
                    {
                        neighborCell.Color = color;
                    }
                }
            }
        }


    }
}