namespace Contracts.Models
{
  public class ClientDTO
  {
    public int Id { get; set; }

    public int? MainId { get; set; }

    public string Name { get; set; } = null!;

    public string Ip { get; set; } = null!;

    public string? BillAddress { get; set; }

    public string? MailAddress { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? CompanyNo { get; set; }

    public string? Vat { get; set; }

    public string? PrimaryContact { get; set; }

    public string? SecContact { get; set; }
  }
}
