using Microsoft.EntityFrameworkCore;
using Part.Models;

namespace Part;

public class PartItemDbContext(DbContextOptions<PartItemDbContext> options) : DbContext(options)
{
  public DbSet<PartItem> PartItems { get; set; } = null!;

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<PartItem>(entity =>
    {
      entity.Property(e => e.Id)
        .UseIdentityByDefaultColumn();

      entity.Property(e => e.CreatedAt)
        .HasDefaultValueSql("NOW()");
    });
  }
}
