using Rocoland.ViewModel;

namespace Rocoland.Repositories
{
    public interface IUnitOfWork
    {

        void Commit();
        IOrderRepository Orders { get; set; }
        IProductRepository Products { get; set; }
        IProductTypeRepository ProductTypes { get; set; }
        IProducerRepository Producers { get; set; }
    }
}