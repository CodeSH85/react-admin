using Microsoft.EntityFrameworkCore;
using BlueprintBase.Models;
namespace BlueprintBase.Controllers;

public class PartService(PartItemDbContext context)
{
	private readonly PartItemDbContext _context = context;

	public async Task<List<PartItem>> GetAllPartsAsync()
	{
     return await _context.PartItems.ToListAsync();
	}
	public async Task<PartItem?> GetPartByIdAsync(int id)
	{
		return await _context.PartItems.FindAsync(id);
	}
  public async Task<PartItem> AddPartAsync(PartItem part)
  {
    _context.PartItems.Add(part);
    await _context.SaveChangesAsync();
    return part;
  }
  public async Task<PartItem?> UpdatePartAsync(int id, PartItem updatedPart)
  {
    var existingPart = await _context.PartItems.FindAsync(id);
    if (existingPart == null)
    {
      return null;
    }
    existingPart.Name = updatedPart.Name;
    await _context.SaveChangesAsync();
    return existingPart;
  }
}
