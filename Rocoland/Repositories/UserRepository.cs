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
    public class UserRepository : IUserRepository
    {

        //IMappingExpression<Product, ProductViewModel> imapping;
     //   MapperConfiguration config;


        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;

            //config = new MapperConfiguration(cfg =>
            //{
            //    cfg.CreateMap<List<Product>, ProductViewModel>();
            //});
        }

        public ApplicationUser Get(int id)
        {
            var user = _context.Users.Find(id);
            return user;
        }

        public List<ApplicationUser> GetAll()
        {
            var users = _context.Users.ToList();

            return users;
        }

        public void Update(ApplicationUser user)
        {
            var item = _context.Products.Find(user.Id);
            _context.Users.AddOrUpdate(user);
        }
        

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
            }

        }

    }
}