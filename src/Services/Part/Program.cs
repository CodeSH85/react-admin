using BlueprintBase;
using BlueprintBase.Models;
using BlueprintBase.Controllers;
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

const string GetPartByIdEndpointName = "GetPartById";

var app = builder.Build();

app.UseRouting();

if (app.Environment.IsDevelopment())
{
	app.MapOpenApi();
}

app.MapGet("/parts/{id}", async (int id, PartService partService) =>
{
	var partItem = await partService.GetPartByIdAsync(id);
	return partItem == null ? Results.NotFound() : Results.Ok(partItem);
})
.WithName(GetPartByIdEndpointName);

app.MapGet("/parts", async (PartService partService) =>
{
	return await partService.GetAllPartsAsync();
});

app.MapPost("/parts", async (PartItem part, PartService partService) =>
{
	await partService.AddPartAsync(part);
	return Results.CreatedAtRoute(GetPartByIdEndpointName, new { id = part.Id }, part);
});

if (!app.Environment.IsDevelopment()) 
{
    // Only enforce HTTPS in production environments where certificates are explicitly bound
    app.UseHttpsRedirection();
}

app.Run();
