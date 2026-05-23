using BlueprintBase;
using BlueprintBase.Models;
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

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
	var context = scope.ServiceProvider.GetRequiredService<PartItemDbContext>();
	
	var testPartItem = new PartItem("test");
	context.PartItems.Add(testPartItem);
	await context.SaveChangesAsync();
}
// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.MapOpenApi();
}

app.UseHttpsRedirection();

app.Run();
