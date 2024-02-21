using System.Drawing;

namespace GameOfLife.Models
{
    public class CellState
    {
        public bool IsAlive { get; set; }
        public string Color { get; set; }
        public CellState(bool isAlive, string color) 
        {
            IsAlive = isAlive; 
            Color = color;
        }
    }
}
