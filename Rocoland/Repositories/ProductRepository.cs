using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using AutoMapper;
using Rocoland.Models;
using Rocoland.ViewModel;

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

            config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Product, ProductViewModel>();
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

            var products = _context.
                Products.
                Include(p => p.ProductType).
                Include(p => p.Producer).
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

            var dest = mapper.Map<List<Product>, List<ProductViewModel>>(products);
            
            return dest;
        }

        public void Update(Product product)
        {
            var item = _context.Products.Find(product.Id);
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