using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Rocoland.Models;
using Rocoland.Repositories;
using Rocoland.ViewModel;

namespace Rocoland.Controllers
{
    public class ProductController : Controller
    {
        private ApplicationDbContext _context;
        // GET: Product

        public ProductController()
        {
           _context = new ApplicationDbContext();
        }

        [Authorize(Roles = "Administrators")]
        public ActionResult Create()
        {
            var model = new Product
            {
                ProductType = _context.ProductTypes.ToList(),
                Producer = _context.Producers.ToList()
            };

        return View("Create",model);
        }

        [Authorize(Roles = "Administrators")]
        public ActionResult Edit(int id)
        {
            var model = _context.Products.Single(m => m.Id == id);

            model.ProductType = _context.ProductTypes.ToList();
            model.Producer = _context.Producers.ToList();

            return View("Create", model);
        }

        [Authorize(Roles = "Administrators")]
        public ActionResult GetAll()
        {
            var products = _context.Products.ToList();
            return View(products);
        }




        [HttpPost]
        [Authorize(Roles = "Administrators")]
        public ActionResult Create(Product model)
        {

            if (!ModelState.IsValid)
            {
                model.Producer = _context.Producers.ToList();
                model.ProductType = _context.ProductTypes.ToList();

                return View(model);
            }
            if(model.Id == 0)
                _context.Products.Add(model);
            else
            {
                var product =_context.Products.Single(p => p.Id == model.Id);
                product.Description = model.Description;
                product.Name = model.Name;
                product.PictrureId = model.PictrureId;
                product.Price = model.Price;
                product.ProducerId = model.ProducerId;
                product.ProductTypeId = model.ProductTypeId;
            }

            _context.SaveChanges();
            return RedirectToAction("GetAll", "Product");
        }
    }
}