using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Rocoland.Models;
using Rocoland.Repositories;

namespace Rocoland.Controllers
{
    public class ProductTypeController : ApiController
    {
        private readonly IUnitOfWork _uow;

        public ProductTypeController(IUnitOfWork uow)
        {
            _uow = uow;
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var productType = _uow.ProductTypes.Get(id);

            if (productType == null)
                return NotFound();

            return Ok(productType);
        }

        [HttpGet]
        [Route("api/productType/GetAll")]
        public IHttpActionResult GetAll()
        {
            var items = _uow.ProductTypes.GetAll();

            if (items == null)
                return NotFound();

            return Ok(items);
        }

        [HttpPut]
        public IHttpActionResult Update(ProductType productType)
        {
            _uow.ProductTypes.Update(productType);
            _uow.Commit();

            return Ok();
        }

        [HttpPost]
        public IHttpActionResult Create(ProductType productType)
        {
            _uow.ProductTypes.Update(productType);
            _uow.Commit();

            return Ok();
        }

        // DELETE: api/productType/5
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            _uow.ProductTypes.Delete(id);
            _uow.Commit();
            return Ok();
        }
    }
}
