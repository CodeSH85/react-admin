using Part.Services;
using Part.Models;

namespace Part.Endpoints;

public static class PartItemEndpoints
{
  public static void MapPartItemEndpoints(this WebApplication app)
  {
    var partMapGroup = app.MapGroup("/parts");

    partMapGroup.MapGet("/", async (PartService service) =>
    {
      var parts = await service.GetAllPartsAsync();
      return Results.Ok(parts);
    });

    partMapGroup.MapGet("/{id:int}", async (int id, PartService service) =>
    {
      var part = await service.GetPartByIdAsync(id);
      return part != null 
        ? Results.Ok(part)
        : Results.NotFound();
    });

    partMapGroup.MapPost("/", async (PartItem part, PartService service) =>
    {
      var createdPart = await service.AddPartAsync(part);
      return Results.Created($"/parts/{createdPart.Id}", createdPart);
    });

    partMapGroup.MapPut("/{id:int}", async (int id, PartItem updatedPart, PartService service) =>
    {
      var part = await service.UpdatePartAsync(id, updatedPart);
      return part != null 
        ? Results.Ok(part)
        : Results.NotFound();
    });
  }
}