using System;
using System.Collections.Generic;
using Rocoland.Models;

namespace Rocoland.ViewModel
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public DateTime OrderDateTime { get; set; }

        public string OrderStatus { get; set; }

        public UserViewModel Customer { get; set; }
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public virtual ICollection<OrderItemViewModel> OrderItems { get; set; }
    }
}