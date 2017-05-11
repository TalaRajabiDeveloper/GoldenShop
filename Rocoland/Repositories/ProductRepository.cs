using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using System.Web.Providers.Entities;
using AutoMapper;
using Rocoland.Models;
using Rocoland.ViewModel;
using Microsoft.AspNet.Identity;

namespace Rocoland.Repositories 
{
    public class ProductRepository : IProductRepository
    {

        IMappingExpression<Product, ProductViewModel> imapping;
        MapperConfiguration config;


        private readonly ApplicationDbContext _context;

        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;

            ApplicationUser applicationUser = new ApplicationUser();
            
            config = new MapperConfiguration(cfg =>
            {
                imapping = cfg.CreateMap<Product, ProductViewModel>();

                imapping.ForMember(x => x.IsFavoutite,
                    opt => opt.MapFrom(a => a.FanUsers.Contains(applicationUser)));
            });
        }

        public ProductViewModel Get(int id)
        {
            IMapper mapper = config.CreateMapper();

            var product = _context.Products.Find(id);

            var dest = mapper.Map<Product, ProductViewModel>(product);

            return dest;
        }

        public  List<ProductViewModel> GetAll(int? productTypeId)
        {
            IMapper mapper = config.CreateMapper();
            ApplicationUser user = new ApplicationUser();

            var products = _context.
                Products.
                Include(p => p.ProductType).
                Include(p => p.Producer).
                Include(p => p.FanUsers).
                ToList();

            if (productTypeId != null)
            {
                if (productTypeId != 0)
                {
                    products = products
                        .Where(m => m.ProductTypeId == productTypeId)
                        .ToList();
                }
            }

            var productViewModels = mapper.Map<List<Product>, List<ProductViewModel>>(products);
          

            return productViewModels;
        }

        public void Update(Product product , bool isFavourite)
        {
            ApplicationUser user = new ApplicationUser();

            var item = _context.Products.Include(p => p.FanUsers).FirstOrDefault(p => p.Id == product.Id);

            if (item != null)
            {
                if (item.FanUsers.Contains(user))
                {
                    if (!isFavourite)
                    {
                        var fanUser = item.FanUsers.FirstOrDefault(p => p.Id == user.Id);
                        item.FanUsers.Remove(fanUser);

                    }
                }
                else
                {
                    if (isFavourite)
                    {
                        item.FanUsers.Add(user);
                    }
                }
            }

            _context.Products.AddOrUpdate(product);
        }

        public ProductViewModel GetMyProductById(int id)
        {
            throw new NotImplementedException();
        }

        public void DeleteProductById(int id)
        {
            var product = _context.Products.Find(id);
            if (product != null)
            {
                _context.Products.Remove(product);
            }

        }

        public int Create(Product product)
        {
            throw new NotImplementedException();
        }
     
    }
}