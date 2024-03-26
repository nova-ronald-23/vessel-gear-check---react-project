using Azure.Messaging;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Mail;
using world.api.data;
using world.api.Models;

namespace world.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public string save;
        private readonly ApplicationDbContext _dbContext;
        private readonly SmtpConfiguration _smtpConfiguration;


        public UserController(ApplicationDbContext dbContext, SmtpConfiguration smtpConfiguration)
        {
            _dbContext = dbContext;
            _smtpConfiguration = smtpConfiguration;
        }

        [HttpPost]
        public ActionResult<user> Create(user user)
        {
            _dbContext.userinfo.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }



        [HttpPost("send")]
        public IActionResult SendOTP([FromBody] EmailRequestModel emailRequest)
        {
            // Check if the email address is provided and valid
            if (string.IsNullOrWhiteSpace(emailRequest?.EmailAddress) || !IsValidEmail(emailRequest.EmailAddress))
            {
                return BadRequest("Invalid email address.");

            }

            // Check if the provided email exists in the database
            var userWithEmail = _dbContext.userinfo.FirstOrDefault(u => u.email == emailRequest.EmailAddress);
            if (userWithEmail == null)
            {
                return NotFound("Email not found.");
            }

            // Generate a random four-digit OTP
            string otp = GenerateOTP();
            save = otp;

            // Send OTP to the specified email address
            try
            {
                SendOTPByEmail(emailRequest.EmailAddress, otp);

                return Ok(new{Message= "OTP sent successfully.",OTP=otp});


            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, $"Failed to send OTP: {ex.Message}");
            }
        }
        [HttpPut("update")]
        public IActionResult UpdateUserWithSession([FromBody] UserUpdateModel updateUser, string mail)
        {

            if (string.IsNullOrEmpty(mail))
            {

                return Unauthorized($"Session expired or user not{mail} logged in.");
            }

            // Retrieve user from database
            var existingUser = _dbContext.userinfo.FirstOrDefault(u => u.email == mail);
            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            // Update user information
            existingUser.password = updateUser.password; // Example: Assuming you want to update user's name
            _dbContext.SaveChanges();

            return Ok("User information updated successfully.");

        }

        // Validate email address format
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
            return random.Next(1000, 10000).ToString("D4"); // Generate a four-digit OTP
        }

        private void SendOTPByEmail(string emailAddress, string otp)
        {
            // Use SMTP configuration from appsettings.json
            using (SmtpClient smtpClient = new SmtpClient(_smtpConfiguration.Host, _smtpConfiguration.Port))
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

    }

    public class EmailRequestModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string EmailAddress { get; set; }
    }
    public class UserUpdateModel
    {
        public string password { get; set; }
        // Example: Add properties for the fields you want to update
        // Add other properties as needed
    }
}