using Microsoft.AspNetCore.Mvc;
using vessel_gear_check_api.Data;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VesselProfileController : ControllerBase
    {
        private readonly VesselProfileDbContext _context;

        public VesselProfileController(VesselProfileDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult PostVesselProfile(VesselProfile vesselProfile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.VesselProfiles.Add(vesselProfile);
            _context.SaveChanges();

            
            string successMessage = "Vessel profile has been successfully inserted.";

            
            return Ok(successMessage);
        }

        [HttpGet("{IMO_number}")]
        public IActionResult GetVesselProfile(int IMO_number)
        {
            var vesselProfile = _context.VesselProfiles.Find(IMO_number);
            if (vesselProfile == null)
            {
                return NotFound();
            }
            return Ok(vesselProfile);
        }
    }
}
