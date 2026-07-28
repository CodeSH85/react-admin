using Part;
using Part.Models;
using Part.Endpoints;
using Part.Services;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using Scalar.AspNetCore;

DotNetEnv.Env.Load();
DotNetEnv.Env.TraversePath().Load();

var builder = WebApplication.CreateBuilder(args);

var dbPassword = Environment.GetEnvironmentVariable("DB_PASSWORD");
var baseConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var connectionString = $"{baseConnectionString};Password={dbPassword}";

builder.Services.AddCors(options =>
{
	options.AddDefaultPolicy(policy => 
		policy
			.AllowAnyOrigin()
			.AllowAnyHeader()
			.AllowAnyMethod()
);
});

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
	app.MapScalarApiReference();
}

app.MapPartItemEndpoints();

app.UseCors();

if (!app.Environment.IsDevelopment()) 
{
	// Only enforce HTTPS in production environments where certificates are explicitly bound
	app.UseHttpsRedirection();
}

app.Run();
