using System.Linq;
using System.Web;
using Rocoland.Models;

namespace Rocoland.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
    
        private readonly ApplicationDbContext _context;
        public IOrderRepository Orders { get; set; }
        public IUserRepository Users { get; set; }
        public IProductRepository Products { get; set; }
        public IProductTypeRepository ProductTypes { get; set; }
        public IProducerRepository Producers { get; set; }
        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Orders = new OrderRepository(_context);
            Products = new ProductRepository(_context);
            ProductTypes = new ProductTypeRepository(_context);
            Producers = new ProducerRepository(_context);
            Users = new UserRepository(_context);
        }

        public void Commit()
        {
            _context.SaveChanges();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
        
    }
}