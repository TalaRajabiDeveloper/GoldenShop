using Rocoland.Models;

namespace Rocoland.ViewModel
{
    public class OrderItemViewModel
    {
        public int Quantity { get; set; }
        public int Price { get; set; }
        public ProductViewModel Product { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
    }
}