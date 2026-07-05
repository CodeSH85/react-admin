namespace Part.Models;
public class PartItem(string name)
{
  public int Id { get; set; }
  public string? Name { get; set; } = name;
  public string? Type { get; set; }
  public int? ParentId { get; set; }
  public List<PartItem>? ChildPartItem { get; set; }  
  public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
  public string? CreatedBy { get; set; }
  public DateTime? UpdatedAt { get; set; }
  public string? UpdatedBy { get; set; }
}
