using Microsoft.EntityFrameworkCore;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Data
{
    public class VesselProfileDbContext : DbContext
    {
        public VesselProfileDbContext(DbContextOptions<VesselProfileDbContext> options) : base(options)
        {

        }
        public DbSet<VesselProfile> VesselProfiles { get; set; }
    }
}

