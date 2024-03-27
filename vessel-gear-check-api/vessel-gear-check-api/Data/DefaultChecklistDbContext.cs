using Microsoft.EntityFrameworkCore;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Data
{
    public class DefaultChecklistDbContext: DbContext
    {
        public DefaultChecklistDbContext(DbContextOptions<DefaultChecklistDbContext> options) : base(options)
        {

        }
        public DbSet<DefaultChecklist> DefaultChecklists { get; set; }
    }
}
