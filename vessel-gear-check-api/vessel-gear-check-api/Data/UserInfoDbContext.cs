using Microsoft.EntityFrameworkCore;
using vessel_gear_check_api.Models;

namespace vessel_gear_check_api.Data
{
    public class UserInfoDbContext : DbContext
    {
        public UserInfoDbContext(DbContextOptions<UserInfoDbContext> options) : base(options)
        { }

        public DbSet<User_info> User_infos { get; set; } 
    }
}