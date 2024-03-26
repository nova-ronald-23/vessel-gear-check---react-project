using Microsoft.EntityFrameworkCore;
using world.api.Models;

namespace world.api.data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {

        }
        public DbSet<user> userinfo {  get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<user>()
               .Property(u => u.uniqueid)
               .ValueGeneratedNever();
        }
    }
}
