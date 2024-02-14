using System.Drawing;

namespace GameOfLife.Models
{
    public interface IService
    {
        Cell[,] grid { get;set; }
        void InitializeGrid(int Rows, int Columns);
        void UpdateGrid(Cell[,] newGrid);
        void ForceAliveCell(int row, int col, int[][] pattern);
        void ClearMap();
    }
}
