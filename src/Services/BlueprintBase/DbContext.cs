using Microsoft.EntityFrameworkCore;
using BlueprintBase.Models;

namespace BlueprintBase;

public class PartItemDbContext(DbContextOptions<PartItemDbContext> options) : DbContext(options)
{
  // Target DB Table
  public DbSet<PartItem> PartItems { get; set; } = null!;
}
