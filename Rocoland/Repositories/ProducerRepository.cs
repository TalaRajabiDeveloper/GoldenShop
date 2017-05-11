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
    public class ProducerRepository : IProducerRepository
    {

        IMappingExpression<Product, ProductViewModel> imapping;
        MapperConfiguration config;


        private readonly ApplicationDbContext _context;

        public ProducerRepository(ApplicationDbContext context)
        {
            _context = context;

            config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<List<Product>, ProductViewModel>();
            });
        }

        public Producer Get(int id)
        {
            var producer = _context.Producers.Find(id);
            return producer;
        }

        public List<Producer> GetAll()
        {
            var producers = _context.Producers.ToList();

            return producers;
        }

        public void Update(Producer producer)
        {
            var item = _context.Products.Find(producer.Id);
            _context.Producers.AddOrUpdate(producer);
        }
        

        public void Delete(int id)
        {
            var producer = _context.Producers.Find(id);
            if (producer != null)
            {
                _context.Producers.Remove(producer);
            }

        }

    }
}