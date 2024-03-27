using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System.Globalization; 
using vessel_gear_check_api.Data;
<<<<<<< Updated upstream
using vessel_gear_check_api.Models;
=======
using static vessel_gear_check_api.Controllers.User_infoController;
>>>>>>> Stashed changes

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
CultureInfo.DefaultThreadCurrentCulture = CultureInfo.InvariantCulture;

#region configure CORS

builder.Services.AddCors(options =>
{
    options.AddPolicy("CustomPolicy", x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

#endregion

<<<<<<< Updated upstream

#region Configure Database

var ConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(ConnectionString));

#endregion
=======
builder.Services.AddDbContext<UserInfoDbContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddDbContext<CreateChecklistDbContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddDbContext<DefaultChecklistDbContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddDbContext<VesselProfileDbContext>(options => options.UseSqlServer(connectionString));
builder.Services.Configure<SmtpConfiguration>(builder.Configuration.GetSection("SmtpConfiguration"));
builder.Services.AddSingleton<SmtpConfiguration>(builder.Configuration.GetSection("SmtpConfiguration").Get<SmtpConfiguration>());
>>>>>>> Stashed changes
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();