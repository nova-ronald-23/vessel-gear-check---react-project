using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
<<<<<<< Updated upstream:vessel-gear-check-api/vessel-gear-check-api/Controllers/User_infoController.cs
=======
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
>>>>>>> Stashed changes:vessel-gear-check-api/vessel-gear-check-api/Controllers/User_infoControll.cs
using vessel_gear_check_api.Data;
using vessel_gear_check_api.Models;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using static vessel_gear_check_api.Controllers.User_infoController;

namespace vessel_gear_check_api.Controllers

{
    public class User_infoController
    {
<<<<<<< Updated upstream:vessel-gear-check-api/vessel-gear-check-api/Controllers/User_infoController.cs

        [ApiController]
        [Route("api/[controller]")]
        public class User_infoController : ControllerBase
        {
            private readonly ApplicationDbContext _context;
=======
        private readonly UserInfoDbContext _context;
        private readonly ILogger<User_infoController> _logger;
        private readonly IConfiguration _configuration;
        private readonly SmtpConfiguration _smtpConfiguration;


        public User_infoController(UserInfoDbContext context, ILogger<User_infoController> logger, IConfiguration configuration, SmtpConfiguration smtpConfiguration)
        {
            _context = context;
            _logger = logger;
            _configuration = configuration;
            _smtpConfiguration = smtpConfiguration;

        }
>>>>>>> Stashed changes:vessel-gear-check-api/vessel-gear-check-api/Controllers/User_infoControll.cs

            public User_infoController(ApplicationDbContext context)
            {
                _context = context;
            }


            [HttpPost]
        [Route("api/UserInfo")]
        public IActionResult AddUserInfo([FromBody] User_info userInfo)
        {
            if (userInfo == null)
            {
                return BadRequest("User information is required");
            }

            try
            {
                _context.User_infos.Add(userInfo);
                _context.SaveChanges();
                return Ok("User information added successfully");
            }
<<<<<<< Updated upstream:vessel-gear-check-api/vessel-gear-check-api/Controllers/User_infoController.cs
            return BadRequest("Invalid data provided");
        }

        [HttpPost]
        [Route("api/AuthenticateUser")]
        public IActionResult AuthenticateUser([FromBody] User_info userCredentials)
        {
            var user = _context.User_infos.FirstOrDefault(u => u.User_Name == userCredentials.User_Name && u.Password == userCredentials.Password);
            if (user != null)
=======
            catch (Exception ex)
>>>>>>> Stashed changes:vessel-gear-check-api/vessel-gear-check-api/Controllers/User_infoControll.cs
            {
                _logger.LogError(ex, "Error adding user information: {ErrorMessage}", ex.Message);
                return StatusCode(500, "Internal server error");
            }
<<<<<<< Updated upstream:vessel-gear-check-api/vessel-gear-check-api/Controllers/User_infoController.cs
            return BadRequest("Invalid credentials");
=======
>>>>>>> Stashed changes:vessel-gear-check-api/vessel-gear-check-api/Controllers/User_infoControll.cs
        }

        [HttpPost("send-verification-code")]
        public IActionResult SendVerificationCode([FromBody] EmailModel model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.Email))
            {
                return BadRequest("Email address is required");
            }

            var user = _context.User_infos.FirstOrDefault(u => u.Email == model.Email);
            if (user == null)
            {
                return NotFound("Email address not found");
            }
            string otp = GenerateOTP();
            
            // Send OTP to the specified email address
            try
            {
                SendOTPByEmail(model.Email, otp); // Use model.Email instead of emailRequest.Email
                return Ok(new { Message = "OTP sent successfully.", OTP = otp });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Failed to send OTP: {ex.Message}");
            }
        }

        private bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        private string GenerateOTP()
        {
            Random random = new Random();
            return random.Next(1000, 10000).ToString("D4");
        }

            private void SendOTPByEmail(string emailAddress, string otp)
            {
        

                using (var smtpClient = new SmtpClient(_smtpConfiguration.Host, _smtpConfiguration.Port))
                {
                    smtpClient.EnableSsl = true;
                    smtpClient.Credentials = new NetworkCredential(_smtpConfiguration.Username, _smtpConfiguration.Password);

                    MailMessage mailMessage = new MailMessage();
                    mailMessage.From = new MailAddress(_smtpConfiguration.SenderEmail);
                    mailMessage.To.Add(emailAddress);
                    mailMessage.Subject = "OTP verification";
                    mailMessage.IsBodyHtml = true;
                    mailMessage.Body = $"Hi, <br><br> Welcome to our <b>Vessel Gear Check System</b> App <br><br> Your OTP verification for New password is: <b>{otp}</b>. <br><br> If you do not request for new password verification, kindly ignore this mail :) <br><br> <b>Thank you...</b>";

                    smtpClient.Send(mailMessage);
                }
            }

        [HttpPut("repassword{email}")]
        public async Task<ActionResult> PutUser_info(string email, [FromBody] Userpassword reset)
        {
            if (string.IsNullOrEmpty(email) || reset == null)
            {
                return BadRequest("Invalid request data.");
            }

            var existingUser = await _context.User_infos.FirstOrDefaultAsync(u => u.Email == email);
            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            existingUser.Password = reset.Password;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                bool userExists = await _context.User_infos.AnyAsync(u => u.Email == email);
                if (!userExists)
                {
                    return NotFound("User not found for concurrency update.");
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPut("{email}")]
        public async Task<ActionResult> PutUser_info(string email, [FromBody] UserUpdateDto updateDto)
        {
            if (string.IsNullOrEmpty(email) || updateDto == null)
            {
                return BadRequest("Invalid request data.");
            }

            var existingUser = await _context.User_infos.FirstOrDefaultAsync(u => u.Email == email);
            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            existingUser.User_Name = updateDto.UserName;
            existingUser.Role = updateDto.Role;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                bool userExists = await _context.User_infos.AnyAsync(u => u.Email == email);
                if (!userExists)
                {
                    return NotFound("User not found for concurrency update.");
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private int GenerateVerificationCode()
        {
            var random = new Random();
            return random.Next(1000, 10000);
        }

        public class UserLoginRequest
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class EmailModel
        {
            public string Email { get; set; }
        }

        public class Userpassword
        {
            public String Password { get; set; }
        }
        public class UserUpdateDto
        {
            public string UserName { get; set; }
            public string Role { get; set; }
        }
        public class SmtpConfiguration
        {
            public string Host { get; set; }
            public int Port { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
            public string SenderEmail { get; set; }
        }
    }
}
    }
