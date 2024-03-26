using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace world.api.Models
{
    public class MaxIntLengthAttribute : ValidationAttribute
    {
        private readonly int _maxLength;

        public MaxIntLengthAttribute(int maxLength)
        {
            _maxLength = maxLength;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value != null)
            {
                int intValue;
                if (Int32.TryParse(value.ToString(), out intValue))
                {
                    if (intValue.ToString().Length > _maxLength)
                    {
                        return new ValidationResult($"The field {validationContext.DisplayName} must be a number with maximum {_maxLength} digits.");
                    }
                }
                else
                {
                    return new ValidationResult($"The field {validationContext.DisplayName} must be a valid integer.");
                }
            }

            return ValidationResult.Success;
        }
    }

    public class PasswordValidationAttribute : ValidationAttribute
    {
        private readonly int _minLength;

        public PasswordValidationAttribute(int minLength)
        {
            _minLength = minLength;
        }

        public override bool IsValid(object value)
        {
            if (value == null || string.IsNullOrWhiteSpace(value.ToString()))
                return false;

            // Minimum length check
            if (value.ToString().Length < _minLength)
                return false;

            // You can implement additional checks like requiring a certain combination of characters
            // For example, here we're requiring at least one uppercase, one lowercase, and one digit
            var passwordRegex = new Regex(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$");
            return passwordRegex.IsMatch(value.ToString());
        }
    }

    public class user
    {
        [Key]
        [Required]
        [MaxIntLength(6)]
        public int uniqueid { get; set; }
       
        [MaxLength(20)]
        public string name{ get; set; }
        [Required]
       
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string email{ get; set; }
        [Required]
        
        [PasswordValidation(8, ErrorMessage = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.")]
        public string password { get; set; }
        [Required]
        [MaxLength(20)]
        public string role { get; set; }
       
    }
   

    public class SmtpConfiguration
    {
        public string Host { get; set; }
        public int Port { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool EnableSsl { get; set; }
        public string SenderEmail { get; set; }
    }
}
