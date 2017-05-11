using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Rocoland.Models
{
    public class DbInitializer : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            
            var productTypes = new List<ProductType>();
            var producers = new List<Producer>();

            "Dairy,Fundamental,Fruits,Drink,Toys".Split(',')
                  .ToList().
                  ForEach(i =>
                {
                    var productType = new ProductType();
                    productType.Id = i.GetEnumerator().Current;
                    productType.Name = i ;
                    productTypes.Add(productType);
                });

            "RocoFruit,Kale,Cheetoz,Tolo,Hashemi".Split(',')
                .ToList().
                ForEach(i =>
                {
                    var producer = new Producer();
                    producer.Id = i.GetEnumerator().Current;
                    producer.Name = i;
                    producers.Add(producer);
                });

            context.ProductTypes.AddRange(productTypes);

            IList<Product> products = new List<Product>();
            "Dark Before Dawn,,Love and War,Coca Cola,Charly Bliss".Split(',')
                .ToList()
                .ForEach(i =>
                {
                    products.Add(new Product()
                    {
                        Name = i,
                        ProductTypeId = 1,
                        Price = i.GetEnumerator().Current,
                        Description = i,
                        PictrureId = "https://images-na.ssl-images-amazon.com/images/I/51wL8V-d1jL._SS500.jpg",
                        ProducerId = 1
                    });
                });

            context.Products.AddRange(products);

            base.Seed(context);
        }
    }
}