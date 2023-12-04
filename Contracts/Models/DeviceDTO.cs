namespace Contracts.Models
{
  public class DeviceDTO
  {
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Ip { get; set; } = null!;

    public bool Reachable { get; set; }

    public string? Status { get; set; }

    public string Type { get; set; } = null!;

    public string? PatchStatus { get; set; }

    public string? AlertStatus { get; set; }

    public int ClientId { get; set; }
  }
}
