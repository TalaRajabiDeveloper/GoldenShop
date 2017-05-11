using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Rocoland.Models;

namespace Rocoland.ViewModel
{
    public class ProductViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        public ProductType ProductType { get; set; }

        public string ProductTypeName { get; set; }
        public string ProductTypeId { get; set; }
        [Required]
        public decimal Price { get; set; }

        [Required]
        public string PictrureId { get; set; }

        public Producer Producer { get; set; }
        public int ProducerId { get; set; }
        public string ProducerName { get; set; }

        public string Description { get; set; }
    }
}