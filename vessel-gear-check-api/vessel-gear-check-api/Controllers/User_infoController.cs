using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vessel_gear_check_api.Data;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Controllers
{
    public class User_infoController
    {

        [ApiController]
        [Route("api/[controller]")]
        public class User_infoController : ControllerBase
        {
            private readonly ApplicationDbContext _context;

            public User_infoController(ApplicationDbContext context)
            {
                _context = context;
            }


            [HttpPost]
        [Route("api/UserInfo")]
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

        [HttpPost]
        [Route("api/AuthenticateUser")]
        public IActionResult AuthenticateUser([FromBody] User_info userCredentials)
        {
            var user = _context.User_infos.FirstOrDefault(u => u.User_Name == userCredentials.User_Name && u.Password == userCredentials.Password);
            if (user != null)
            {
                return Ok("User authenticated successfully");
            }
            return BadRequest("Invalid credentials");
        }

    }
}
    }
