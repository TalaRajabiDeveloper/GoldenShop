using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Rocoland.Models
{
    public class Country
    {
        public int Id { get; set; }
     
        public string Name { get; set; }

        public City City { get; set; }
        
    }
}