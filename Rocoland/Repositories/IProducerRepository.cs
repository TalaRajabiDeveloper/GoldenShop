using System.Collections.Generic;
using Rocoland.Models;

namespace Rocoland.Repositories
{
    public interface IProducerRepository
    {
        List<Producer> GetAll();
        Producer Get(int id);
        void Update(Producer producer);
        void Delete(int id);
    }
}