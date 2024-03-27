using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vessel_gear_check_api.Data;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultChecklistController : ControllerBase
    {
        private readonly DefaultChecklistDbContext _context;

        public DefaultChecklistController(DefaultChecklistDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostDefaultChecklist(DefaultChecklist defaultChecklist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.DefaultChecklists.Add(defaultChecklist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDefaultChecklist", new { id = defaultChecklist.Question_id }, defaultChecklist);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DefaultChecklist>>> GetDefaultChecklists()
        {
            var defaultChecklists = await _context.DefaultChecklists.ToListAsync();
            return Ok(defaultChecklists);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDefaultChecklist(int id)
        {
            var defaultChecklist = await _context.DefaultChecklists.FindAsync(id);

            if (defaultChecklist == null)
            {
                return NotFound();
            }

            return Ok(defaultChecklist);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDefaultChecklist(int id, DefaultChecklist defaultChecklist)
        {
            if (id != defaultChecklist.Question_id)
            {
                return BadRequest();
            }

            _context.Entry(defaultChecklist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DefaultChecklistExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool DefaultChecklistExists(int id)
        {
            return _context.DefaultChecklists.Any(e => e.Question_id == id);
        }
    }
}



