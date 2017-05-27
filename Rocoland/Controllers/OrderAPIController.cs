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
using Rocoland.Migrations;
using Rocoland.Models;
using Rocoland.Repositories;
using Product = Rocoland.Models.Product;

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

            var openBasket = _uow.Orders.GetOrder(userid);
            if (openBasket == null)
            {
                openBasket = CreateBasket(product, userid);
            }
            else
            {
                var orderItem = openBasket.OrderItems.FirstOrDefault(o => o.ProductId == product.Id);
                if (orderItem != null)
                {
                    orderItem.Quantity++;
                }
                else
                {
                    openBasket.OrderItems.Add(new OrderItem
                    {
                        Order = openBasket,
                        Quantity = 1,
                        Price = product.Price,
                        ProductId = product.Id
                    });
                }
            }

            _uow.Commit();

            return Ok(openBasket);

        }

        private Order CreateBasket(Product product, string userid)
        {
            Order openBasket = _uow.Orders.Create(new Order
            {
                CustomerId = userid,
                OrderStatus = OrderStatus.Ordered,
                OrderDateTime = DateTime.Now,
                OrderItems = new List<OrderItem>()
            });
            openBasket.OrderItems.Add(new OrderItem
            {
                Order = openBasket,
                Quantity = 1,
                Price = product.Price,
                ProductId = product.Id
            });
            return openBasket;
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
        [Route("api/OrderAPI/GetMyOrder")]
        public IHttpActionResult GetMyOrder()
        {
            var myOrder = _uow.Orders.GetMyOrder(OrderStatus.Ordered);

            if (myOrder == null)
                return NotFound();

            return Ok(myOrder);
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
        [Route("api/OrderAPI/{orderId}")]
        [HttpDelete]
        public IHttpActionResult Delete(int orderId)
        {
            Order order = _uow.Orders.DeleteOrderItem(orderId);
            _uow.Commit();

            return Ok(order);
        }


    }

}
