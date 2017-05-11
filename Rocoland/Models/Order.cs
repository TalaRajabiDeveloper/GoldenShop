using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Rocoland.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDateTime { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public ApplicationUser Customer { get; set; }
        public string CustomerId { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}


