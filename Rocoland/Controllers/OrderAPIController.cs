using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Results;
using Microsoft.ApplicationInsights.Web;
using Microsoft.ApplicationInsights.WindowsServer;
using Microsoft.AspNet.Identity;
using Rocoland.Models;
using Rocoland.Repositories;

namespace Rocoland.Controllers
{
//    [Authorize]
    public class OrderApiController : ApiController
    {
        private readonly IUnitOfWork _uow;

        public OrderApiController(IUnitOfWork uow)
        {
            _uow = uow;
        }


        [HttpPost]
      //  [Authorize]
        [ResponseType(typeof(Order))]
        public IHttpActionResult Post(Product product)
        {
            var userid = "1";//User.Identity.GetUserId();

            var order = _uow.Orders.Create(userid);

            OrderItem orderItem = new OrderItem
            {
                Product = product,
                Quantity = 1,
                Price = 1,
                Order = order
            };

            orderItem.Quantity = _uow.Orders.GetOrderItemQuantity(orderItem)+1;
           
            _uow.Orders.CreateOrderItem(orderItem);

            _uow.Commit();

            return Ok(order);

        }

        [HttpGet]
        public IHttpActionResult GetOrderItems(int orderId)
        {
            var orderItems = _uow.Orders.GetOrdeItem(orderId);

            if (orderItems == null)
                return NotFound();

            return Ok(orderItems);
        }

        [HttpGet]
        public IHttpActionResult GetOrderNotifications()
        {
            var notifications = _uow.Orders.GetOrders(OrderStatus.Ordered);

            if (notifications == null)
                return NotFound();

            return Ok(notifications);
        }

        // PUT: api/ordersAPI/5
        [ResponseType(typeof(void))]
        [HttpPut]
        public async Task<IHttpActionResult> PutOrder(Order order)
        {
            _uow.Orders.UpdateOrderStatusById(order.Id,OrderStatus.Confirmed);
            _uow.Commit();

            return StatusCode(HttpStatusCode.NoContent);
        }

       

        // DELETE: api/ordersAPI/5
        [ResponseType(typeof(Order))]
        [HttpDelete]
        public IHttpActionResult Deleteorder(Order order)
        {
            _uow.Orders.DeleteOrderById(order.Id);
            _uow.Commit();

            return Ok(order);
        }


    }

}
