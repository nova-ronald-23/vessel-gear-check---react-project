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
        [HttpGet]
        public IActionResult GetChecklistItems()
        {
            var checklistItems = _context.Checklists
                .Select(c => new { c.Question, c.Answer1, c.Answer2, c.Answer3 })
                .ToList();

            return Ok(checklistItems);
        }
    }
}
