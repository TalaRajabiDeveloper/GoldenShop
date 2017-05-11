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
    public class ProducerController : ApiController
    {
        private readonly IUnitOfWork _uow;

        public ProducerController(IUnitOfWork uow)
        {
            _uow = uow;
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var producer = _uow.Producers.Get(id);

            if (producer == null)
                return NotFound();

            return Ok(producer);
        }

        [HttpGet]
        [Route("api/producer/GetAll")]
        public IHttpActionResult GetAll()
        {
            var items = _uow.Producers.GetAll();

            if (items == null)
                return NotFound();

            return Ok(items);
        }

        [HttpPut]
        public IHttpActionResult Update(Producer producer)
        {
            _uow.Producers.Update(producer);
            _uow.Commit();

            return Ok();
        }

        [HttpPost]
        public IHttpActionResult Create(Producer producer)
        {
            _uow.Producers.Update(producer);
            _uow.Commit();

            return Ok();
        }

        // DELETE: api/producer/5
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            _uow.Producers.Delete(id);
            _uow.Commit();
            return Ok();
        }
    }
}
