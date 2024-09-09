using Microsoft.AspNetCore.Mvc;
using TierList.Models;

namespace TierList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id =1, Title = "Spiderman 2", ImageId=1, Ranking=0,ItemType=1 },
            new ItemModel{Id =2, Title = "Red Dead Redemption 2", ImageId=2, Ranking=0,ItemType=1 },
            new ItemModel{Id =3, Title = "Call of Duty: Modern Warfare III", ImageId=3, Ranking=0,ItemType=1 },
            new ItemModel{Id =4, Title = "God of War Ragnarök", ImageId=4, Ranking=0,ItemType=1 },
            new ItemModel{Id =5, Title = "Lethal Company", ImageId=5, Ranking=0,ItemType=1 },
            new ItemModel{Id =6, Title = "Grand Theft Auto V", ImageId=6, Ranking=0,ItemType=1 },
            new ItemModel{Id =7, Title = "Far Cry 6", ImageId=7, Ranking=0,ItemType=1 },
            new ItemModel{Id =8, Title = "Assassins Creed Valhalla", ImageId=8, Ranking=0,ItemType=1 },
            new ItemModel{Id =9, Title = "Minecraft", ImageId=9, Ranking=0,ItemType=1 },
            new ItemModel{Id =10, Title = "Stardew Valley", ImageId=10, Ranking=0,ItemType=1 }
        };

        [HttpGet("{itemType:int}")]
        public ItemModel[] Get(int itemType)
        {
            ItemModel[] items = Items.Where(i => i.ItemType == itemType).ToArray();
            return items;
        }
    }
}
