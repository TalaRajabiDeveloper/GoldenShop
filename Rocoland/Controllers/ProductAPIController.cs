using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using Rocoland.DTO;
using Rocoland.Models;
using Rocoland.Repositories;
using Rocoland.ViewModel;

namespace Rocoland.Controllers
{
    public class ProductAPIController : ApiController
    {
        private readonly IUnitOfWork _uow;

        public ProductAPIController(IUnitOfWork uow)
        {
            _uow = uow;
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var product = _uow.Products.Get(id);

            if (product == null)
                return NotFound();

            return Ok(product);
        }

        [HttpGet]
        [Route("api/ProductAPI/GetAll/{productTypeId}")]
        public IHttpActionResult GetAll(int productTypeId)
        {
            var items = _uow.Products.GetAll(productTypeId);

            if (items == null)
                return NotFound();

            return Ok(items);
        }

        [HttpPut]
        public IHttpActionResult Update(ProductDto productDto)
        {
            IMappingExpression<ProductDto, Product> imapping ;
            MapperConfiguration config;

            config = new MapperConfiguration(cfg =>
            {
                imapping = cfg.CreateMap<ProductDto, Product>();
            });

            IMapper mapper = config.CreateMapper();

            var product = mapper.Map<ProductDto, Product>(productDto);

            _uow.Products.Update(product, productDto.IsFavourite);
            _uow.Commit();

            return Ok();
        }

        [HttpPost]
        public IHttpActionResult Create(Product product)
        {
            _uow.Products.Update(product,false);
            _uow.Commit();

            return Ok();
        }

        // DELETE: api/ProductAPI/5
        [HttpDelete]
        [ResponseType(typeof(Product))]
        public IHttpActionResult Delete(int id)
        {
            _uow.Products.DeleteProductById(id);
            _uow.Commit();
            return Ok();
        }
    }
}
