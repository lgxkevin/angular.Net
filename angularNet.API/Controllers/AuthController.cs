using System.Threading.Tasks;
using angularNet.API.Data;
using angularNet.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace angularNet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController:ControllerBase
    {
        private readonly IAuthRepository _repo;

        public AuthController (IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register (string username, string password)
        {
            username = username.ToLower();
            if (await _repo.UserExists(username))
            {
                return BadRequest("User name already exists");
            }

            var userToCreate = new User
            {
                Username = username
            };

            var createdUser = await _repo.Resigter(userToCreate, password);

            return StatusCode(201);
        }
    }
}