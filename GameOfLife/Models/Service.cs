using Microsoft.CodeAnalysis.Elfie.Model;
using System.Drawing;

namespace GameOfLife.Models
{
    public class Service : IService
    {
       

        private bool isInitialized = false;

        public Cell[,] grid { get; set; }
        public int rows { get; set; }
        public int columns { get; set; }
        public void InitializeGrid(int Rows, int Columns)
        {

            rows = Rows;
            columns = Columns;
            if (!isInitialized)
            {
                grid = new Cell[Rows, Columns];
                for (int i = 0; i < Rows; i++)
                {
                    for (int j = 0; j < Columns; j++)
                    {
                     grid[i, j] = new Cell(false, default);                      
                    }
                }
                isInitialized = true;
            }
        }

        public void UpdateGrid(Cell[,] newGrid)
        {
            grid = newGrid;
        }

        public void ForceAliveCell(int row, int col, int[][] pattern)
        {
            row = Math.Min(row, rows - 1);
            col = Math.Min(col, columns - 1);
            //if (row >= 0 && col >= 0)
            //{
            //    grid[row, col] = new Cell(true);
            //    grid[row, col].SetColor(Color.White);
            //}


            //if (grid[row, col] == null || !grid[row, col].IsAlive)
            //{
            //    grid[row, col] = new Cell(true);
            //    grid[row, col].SetColor(Color.White);
            //}

            for (int i = 0; i < pattern.Length; i++)
            {
                for (int j = 0; j < pattern[i].Length; j++)
                {
                    int curRow = row + i;
                    int curCol = col + j;
                    if (curRow >= 0 && curRow < rows && curCol >= 0 && curCol < columns)
                    {
                        if (grid[curRow, curCol] == null || !grid[curRow, curCol].IsAlive)
                        {
                            if (pattern[i][j] == 1)
                            {
                                grid[curRow, curCol] = new Cell(true, Color.Red);
                            }
      
                        }
                    }
                }


            }
        }

        public void ClearMap()
        {
            grid = new Cell[rows,columns ];
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < columns; j++)
                {
                    grid[i, j] = new Cell(false, Color.Black);

                }
            }
        }
    }
}
