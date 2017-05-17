using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Rocoland.Models;
using Rocoland.ViewModel;

namespace Rocoland.Repositories
{
    public interface IOrderRepository
    {
         List<OrderViewModel> GetOrders(OrderStatus orderStatus);
        void UpdateOrderStatusById(int orderId, OrderStatus orderStatus);
        Order GetMyOrder(OrderStatus orderStatus);
        void DeleteOrderById(int id);
        Order Create(Order order);
        void CreateOrderItem(OrderItem orderItem);

        List<OrderItemViewModel> GetOrdeItem(int orderId);

        int GetOrderItemQuantity(OrderItem orderItem);

        Order GetOrder(string userid);
    }
}
