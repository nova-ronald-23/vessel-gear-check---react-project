using Microsoft.AspNetCore.Mvc;
using System.Linq;
using vessel_gear_check_api.Data;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class User_infoController : ControllerBase
    {
        private readonly UserInfoDbContext _context;

        public User_infoController(UserInfoDbContext context)
        {
            _context = context;
        }

        [HttpPost("AddUserInfo")]
        public IActionResult AddUserInfo([FromBody] User_info userInfo)
        {
            if (ModelState.IsValid)
            {
                _context.User_infos.Add(userInfo);
                _context.SaveChanges();
                return Ok("User information added successfully");
            }
            return BadRequest("Invalid data provided");
        }

        [HttpPost("AuthenticateUser")]
        public IActionResult AuthenticateUser([FromBody] User_info userCredentials)
        {
            var user = _context.User_infos.FirstOrDefault(u => u.Password == userCredentials.Password && u.Email == userCredentials.Email);
            if (user != null)
            {
                return Ok("User authenticated successfully");
            }
            return Unauthorized("Invalid credentials"); // Return Unauthorized for invalid credentials
        }

    }
}
