using Microsoft.EntityFrameworkCore;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Data
{
    public class CreateChecklistDbContext : DbContext
    {
        public CreateChecklistDbContext(DbContextOptions<CreateChecklistDbContext> options) : base(options)
        {

        }
        public DbSet<CreateChecklist> CreateChecklists { get; set; }
    }
}

