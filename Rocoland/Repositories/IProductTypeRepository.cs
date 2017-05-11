using System.Collections.Generic;
using Rocoland.Models;

namespace Rocoland.Repositories
{
    public interface IProductTypeRepository
    {
        List<ProductType> GetAll();
        ProductType Get(int id);
        void Update(ProductType productType);
        void Delete(int id);
    }
}