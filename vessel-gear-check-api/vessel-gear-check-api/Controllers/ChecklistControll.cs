using Microsoft.AspNetCore.Mvc;
using vessel_gear_check_api.Models;
using vessel_gear_check_api.Data;

namespace vessel_gear_check_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChecklistController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ChecklistController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateChecklistItem([FromBody] Checklist checklist)
        {
            if (ModelState.IsValid)
            {
                _context.Checklists.Add(checklist);
                _context.SaveChanges();
                return Ok("Checklist item added successfully");
            }
            return BadRequest("Invalid data provided");
        }
        [HttpPost]
[Route("api/AddChecklistItems")]
public IActionResult AddChecklistItems([FromBody] List<Checklist> checklistItems)
{
    if (ModelState.IsValid)
    {
        _context.Checklists.AddRange(checklistItems);
        _context.SaveChanges();
        return Ok("Checklist items added successfully");
    }
    return BadRequest("Invalid data provided");
}

        [HttpGet]
        public IActionResult GetChecklistItems()
        {
            var checklistItems = _context.Checklists
                .Select(c => new { c.Question, c.Answer1, c.Answer2, c.Answer3 })
                .ToList();

            return Ok(checklistItems);
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
