using Rocoland.Models;

namespace Rocoland.ViewModel
{
    public class OrderItemViewModel
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public ProductViewModel Product { get; set; }
        public ProducerViewModel Producer { get; set; }
        public string ProductName { get; set; }
        public string ProducerName { get; set; }
        public string ProductDescription { get; set; }
        public string PictrureId { get; set; }
    }
}