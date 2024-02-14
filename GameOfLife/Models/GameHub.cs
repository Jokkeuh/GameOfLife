using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;

namespace GameOfLife.Models
{
    public class GameHub : Hub
    {
        public async Task SendUpdatedGrid(GridDto gridDto)
        {
            Console.WriteLine("Sending updated grid: " + JsonConvert.SerializeObject(gridDto));
            await Clients.All.SendAsync("UpdateGrid", gridDto);
        }
    }
}
