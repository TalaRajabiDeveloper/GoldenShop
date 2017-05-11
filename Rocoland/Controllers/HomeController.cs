using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Ajax.Utilities;
using Rocoland.Models;
using Rocoland.Repositories;
using Rocoland.ViewModel;
using ActionResult = System.Web.Mvc.ActionResult;
using Controller = System.Web.Mvc.Controller;

namespace Rocoland.Controllers
{
    public class HomeController : Controller
    {
        private readonly IUnitOfWork _uow;
        public ActionResult Index()
        {
            return View();
        }

        //public HomeController(IUnitOfWork uow)
        //{
        //    _uow = uow;
        //}
        //public ActionResult Index(int? productTypeId)
        //{
        //   return View(_uow.Products.GetAll(productTypeId));
        //}

        //public ActionResult SearchIndex(string query)
        //{
        //    return View("Index",_uow.Products.Search(query));
        //}

        //[HttpPost]
        //public ActionResult Search(ProductViewModel productViewModel)
        //{
        //    return RedirectToAction("SearchIndex", "Home",new {query = productViewModel.SearchItem});
        //}
    }
}