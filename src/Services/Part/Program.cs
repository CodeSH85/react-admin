using Part;
using Part.Models;
using Part.Endpoints;
using Part.Services;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;

DotNetEnv.Env.Load();
DotNetEnv.Env.TraversePath().Load();

var builder = WebApplication.CreateBuilder(args);

var dbPassword = Environment.GetEnvironmentVariable("DB_PASSWORD");
var baseConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var connectionString = $"{baseConnectionString};Password={dbPassword}";

builder.Services.AddDbContext<PartItemDbContext>(options =>
	options.UseNpgsql(connectionString)
);

builder.Services.AddValidation();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddScoped<PartService>();

var app = builder.Build();

app.UseRouting();

if (app.Environment.IsDevelopment())
{
	app.MapOpenApi();
}

app.MapPartItemEndpoints();

if (!app.Environment.IsDevelopment()) 
{
    // Only enforce HTTPS in production environments where certificates are explicitly bound
    app.UseHttpsRedirection();
}

app.Run();
