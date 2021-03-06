﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using AutoMapper;
using Rocoland.Models;
using Rocoland.ViewModel;

namespace Rocoland.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ApplicationDbContext _context;

        IMappingExpression<Order, OrderViewModel> imapping;
        MapperConfiguration config;
        public OrderRepository(ApplicationDbContext context)
        {
            _context = context;

            config = new MapperConfiguration(cfg =>
            {
                imapping = cfg.CreateMap<Order, OrderViewModel>();

                imapping.ForMember(x => x.OrderStatus,
                    opt => opt.MapFrom(source => Enum.GetName(typeof(OrderStatus), source.OrderStatus)));

                imapping.ForMember(x => x.CustomerName,
                    opt => opt.MapFrom(a => a.Customer.Name + " " + a.Customer.FamilyName));

                imapping.ForMember(x => x.OrderDateTime,
                    opt => opt.MapFrom(order => order.OrderDateTime.ToShortDateString()));


                cfg.CreateMap<ApplicationUser, UserViewModel>();
                cfg.CreateMap<Product, ProductViewModel>();
                var orderiteMappingExpression = cfg.CreateMap<OrderItem, OrderItemViewModel>();

                
            });
        }

        public void UpdateOrderStatusById(int orderId , OrderStatus orderStatus)
        {
            var order = _context.Orders.Find(orderId);
            if (order != null)
            {
                order.OrderStatus = orderStatus;
            }
            
        }

        public Order DeleteOrderItem(int id)
        {
            var orderItem = _context.OrderItems.Find(id);
            if (orderItem != null)
            {
                _context.OrderItems.Remove(orderItem);
            }
            return _context.Orders.Find(orderItem.OrderId);
        }

        public int GetOrderItemQuantity(OrderItem orderItem)
        {

            var iqItems =_context.OrderItems.Where(o => o.OrderId == orderItem.OrderId &&
                                           o.ProductId == orderItem.ProductId);

            return iqItems.Any() ? iqItems.FirstOrDefault().Quantity : 1;
        }

        public Order GetOrder(string userid)
        {
            return _context.Orders
                .Include(orderItem => orderItem.OrderItems)
                .FirstOrDefault(o => o.CustomerId == userid && o.OrderStatus == OrderStatus.Ordered);
        }

        public List<OrderItemViewModel> GetOrdeItem(int orderId)
        {
            IMapper mapper = config.CreateMapper();

            var orderitems = _context.OrderItems.Where(a => a.OrderId == orderId)
                .Include(x => x.Product)
                .ToList();

            var dest = mapper.Map<List<OrderItem>, List<OrderItemViewModel>>(orderitems);

            return dest;

        }

        public Order Create(Order order)
        {
            return _context.Orders.Add(order);

            //var iQueryable = _context.Orders.Where(o => o.CustomerId == userId && o.OrderStatus == OrderStatus.Ordered);
            //if (iQueryable.Any())
            //{
            //    return iQueryable.FirstOrDefault();
            //}
            //return _context.Orders.Add(new Order
            //{
            //    OrderDateTime = DateTime.Now,
            //    CustomerId = userId,
            //    OrderStatus = OrderStatus.Ordered
            //});
        }

        public void CreateOrderItem(OrderItem orderItem)
        {
            if (orderItem.Quantity > 1)
            {
                var item = _context.OrderItems
                    .FirstOrDefault(o => orderItem.OrderId == o.OrderId && o.ProductId == orderItem.ProductId);
                if (item !=null)
                    item.Quantity = orderItem.Quantity;
            }
            else
            {
                _context.OrderItems.Add(orderItem);
            }
        }
        public OrderViewModel GetMyOrder(OrderStatus orderStatus)
        {
            IMapper mapper = config.CreateMapper();

            string userid = "1";

            var order = _context.Orders
                .Where(o => o.CustomerId == userid &&
                            o.OrderStatus == orderStatus)
                .OrderByDescending(o => o.OrderDateTime)
                .Include(o => o.OrderItems.Select(a => a.Product).Select(a => a.Producer))
                .FirstOrDefault();

            var dest = mapper.Map<Order, OrderViewModel>(order);

            return dest;
        }

        public List<OrderViewModel> GetOrders(OrderStatus orderStatus)
        {
            IMapper mapper = config.CreateMapper();

            var orders =  _context.Orders
                .Where(o => o.OrderStatus == orderStatus)
                .Include(n => n.Customer)
                .Include(n => n.OrderItems.Select(y => y.Product))
                .ToList();
            
            var dest = mapper.Map<List<Order>, List<OrderViewModel>>(orders);

          

            return dest;
        }
    }
}