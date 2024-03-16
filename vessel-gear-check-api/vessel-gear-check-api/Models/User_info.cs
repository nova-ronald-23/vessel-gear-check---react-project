using System.ComponentModel.DataAnnotations;

namespace vessel_gear_check_api.Models
{
    public class User_info
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string User_Name { get; set; }

        [Required]
        [StringLength(16, MinimumLength = 8, ErrorMessage = "The {0} must be between {2} and {1} characters.")]
        public string Password { get; set; }

        [Required]
        public string Roll { get; set; }

        [Required]
        public string Email { get; set; }   

        [Required]
        public string Address { get; set; }
    }
}