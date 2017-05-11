using System;
using System.Data.Entity;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using AutoMapper;
using Rocoland.Models;
using Rocoland.Repositories;
using Rocoland.ViewModel;

namespace Rocoland.Repositories
{
    public class ProductTypeRepository : IProductTypeRepository
    {

        IMappingExpression<Product, ProductViewModel> imapping;
        MapperConfiguration config;


        private readonly ApplicationDbContext _context;

        public ProductTypeRepository(ApplicationDbContext context)
        {
            _context = context;

            config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<List<Product>, ProductViewModel>();
            });
        }

        public ProductType Get(int id)
        {
            var productType = _context.ProductTypes.Find(id);
            return productType;
        }

        public List<ProductType> GetAll()
        {
            var productTypes = _context.ProductTypes.ToList();

            return productTypes;
        }

        public void Update(ProductType productType)
        {
            var item = _context.Products.Find(productType.Id);
            _context.ProductTypes.AddOrUpdate(productType);
        }
        

        public void Delete(int id)
        {
            var productType = _context.ProductTypes.Find(id);
            if (productType != null)
            {
                _context.ProductTypes.Remove(productType);
            }

        }

    }
}