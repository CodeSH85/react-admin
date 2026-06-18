namespace BlueprintBase.Models;
public class PartItem(string name)
{
  public int Id { get; set; }
  public string? Name { get; set; } = name;
  public string? Type { get; set; }
  public int? ParentId { get; set; }
}
