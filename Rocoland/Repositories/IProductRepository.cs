using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Rocoland.Models;
using Rocoland.ViewModel;

namespace Rocoland.Repositories
{
    public interface IProductRepository
    {
        List<ProductViewModel> GetAll(int? productTypeId);
        ProductViewModel Get(int id);
        void Update(Product product);
        ProductViewModel GetMyProductById(int id);
        void DeleteProductById(int id);
        int Create(Product product);
        //ProductViewModel Search(string query);
    }
}