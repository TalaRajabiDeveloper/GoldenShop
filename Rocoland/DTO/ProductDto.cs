using System.Collections.Generic;
using Rocoland.Models;

namespace Rocoland.DTO
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ProductType ProductType { get; set; }
        public int ProductTypeId { get; set; }
        public decimal Price { get; set; }
        public string PictrureId { get; set; }
        public Producer Producer { get; set; }
        public int ProducerId { get; set; }
        public string Description { get; set; }
        public bool IsFavourite { get; set; }
        public virtual ICollection<ApplicationUser> FanUsers { get; set; }
    }
}