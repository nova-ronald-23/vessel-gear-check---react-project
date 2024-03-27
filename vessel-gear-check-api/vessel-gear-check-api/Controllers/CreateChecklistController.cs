using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vessel_gear_check_api.Data;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreateChecklistController : ControllerBase
    {
        private readonly CreateChecklistDbContext _context;

        public CreateChecklistController(CreateChecklistDbContext context)
        {
            _context = context;
        }


        [HttpPost]
        public async Task<IActionResult> PostCreateChecklist(CreateChecklist CreateChecklist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CreateChecklists.Add(CreateChecklist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDefaultChecklist", new { id = CreateChecklist.Question_id }, CreateChecklist);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CreateChecklist>>> GetCreateChecklists()
        {
            var createChecklists = await _context.CreateChecklists.ToListAsync();
            return Ok(createChecklists);
        }


    }
}


