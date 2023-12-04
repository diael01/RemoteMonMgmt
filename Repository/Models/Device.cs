using System;
using System.Collections.Generic;

namespace Repository.Models;

public partial class Device
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Ip { get; set; } = null!;

    public bool? Reachable { get; set; }

    public string? Status { get; set; }

    public string Type { get; set; } = null!;

    public string? PatchStatus { get; set; }

    public string? AlertStatus { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string UpdatedBy { get; set; } = null!;

    public DateTime UpdatedAt { get; set; }

    public int ClientId { get; set; }

    public virtual Client Client { get; set; } = null!;
}
