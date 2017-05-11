using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Rocoland.Models
{
    public class Favorite
    {
        public int Id { get; set; }
        [Required]
        public int ProductId { get; set; }
        public Product Product { get; set; }
        [Required]
        public string CustomerId { get; set; }
        public ApplicationUser Customer { get; set; }
    }
}