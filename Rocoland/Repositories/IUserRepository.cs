using System.Collections.Generic;
using Rocoland.Models;

namespace Rocoland.Repositories
{
    public interface IUserRepository
    {
        List<ApplicationUser> GetAll();
        ApplicationUser Get(int id);
        void Update(ApplicationUser user);
        void Delete(int id);
    }
}