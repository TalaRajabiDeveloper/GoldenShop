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
        Order GetMyOrderByUserIdAndOrderStatus(string userid, OrderStatus orderStatus);
        void DeleteOrderById(int id);
        Order Create(string userId);
        void CreateOrderItem(OrderItem orderItem);

        List<OrderItemViewModel> GetOrdeItem(int orderId);

        int GetOrderItemQuantity(OrderItem orderItem);

    }
}
