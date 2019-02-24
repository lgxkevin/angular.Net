using System.Threading.Tasks;
using angularNet.API.Models;

namespace angularNet.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Resigter (User user, string password);
         Task<User> Login (string username, string password);
         Task<bool> UserExists (string username);

    }
}