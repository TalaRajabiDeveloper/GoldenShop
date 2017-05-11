using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNet.Identity;
using Rocoland.Models;

namespace Rocoland.Controllers
{
    [Authorize]
    public class FavoriteApiController : ApiController
    {
        ApplicationDbContext _context;

        public FavoriteApiController()
        {
            _context = new ApplicationDbContext();
        }


        [HttpPost]
        [Authorize]
        public IHttpActionResult Post(int id)
        {
            var user = User.Identity.GetUserId();
            var favorite = (new Favorite
            {
                ProductId = id,
                CustomerId = user
            });
            _context.Favorites.Add(favorite);
            _context.SaveChanges();

            return Ok(favorite);
        }
    }
}
