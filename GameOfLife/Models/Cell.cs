using System.Drawing;

namespace GameOfLife.Models
{
    public class Cell
    {
        public string Color { get; set; }
        public bool IsAlive { get; set; } = false;

        public Cell(bool state, string color)
        {
                IsAlive = state;

                Color = color;
                //Color = color == default ? Color.White : color;
        }

       

        
       
       
    }
}
