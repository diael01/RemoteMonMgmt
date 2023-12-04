using System;
using System.Collections.Generic;

namespace Repository.Models;

public partial class Client
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

    public DateTime? CreatedAt { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime UpdatedAt { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public virtual ICollection<Device> Devices { get; set; } = new List<Device>();
}
