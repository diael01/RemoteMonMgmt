using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Repository.Models;

public partial class VisionRmmContext : DbContext
{
    public VisionRmmContext()
    {
    }

    public VisionRmmContext(DbContextOptions<VisionRmmContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Client> Clients { get; set; }

    public virtual DbSet<Device> Devices { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=sql.bitzuk.co.uk;Database=VisionRMM_DEV;User Id=vrmmadmin;Password=gcwUxW5KlQfzcaJYZbP3;Encrypt=False;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Client>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_ClientSites");

            entity.Property(e => e.BillAddress).HasMaxLength(128);
            entity.Property(e => e.CompanyNo).HasMaxLength(128);
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(sysdatetime())")
                .HasColumnType("smalldatetime");
            entity.Property(e => e.CreatedBy).HasMaxLength(128);
            entity.Property(e => e.Email).HasMaxLength(64);
            entity.Property(e => e.Ip)
                .HasMaxLength(128)
                .HasColumnName("IP");
            entity.Property(e => e.MailAddress).HasMaxLength(128);
            entity.Property(e => e.Name).HasMaxLength(128);
            entity.Property(e => e.Phone).HasMaxLength(32);
            entity.Property(e => e.PrimaryContact).HasMaxLength(128);
            entity.Property(e => e.SecContact).HasMaxLength(128);
            entity.Property(e => e.UpdatedAt)
                .HasDefaultValueSql("(sysdatetime())")
                .HasColumnType("smalldatetime");
            entity.Property(e => e.UpdatedBy).HasMaxLength(128);
            entity.Property(e => e.Vat)
                .HasMaxLength(128)
                .HasColumnName("VAT");
        });

        modelBuilder.Entity<Device>(entity =>
        {
            entity.Property(e => e.AlertStatus).HasMaxLength(128);
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("(sysdatetime())")
                .HasColumnType("smalldatetime");
            entity.Property(e => e.CreatedBy).HasMaxLength(64);
            entity.Property(e => e.Ip)
                .HasMaxLength(128)
                .HasColumnName("IP");
            entity.Property(e => e.Name).HasMaxLength(128);
            entity.Property(e => e.PatchStatus).HasMaxLength(128);
            entity.Property(e => e.Status).HasMaxLength(16);
            entity.Property(e => e.Type).HasMaxLength(64);
            entity.Property(e => e.UpdatedAt)
                .HasDefaultValueSql("(sysdatetime())")
                .HasColumnType("smalldatetime");
            entity.Property(e => e.UpdatedBy).HasMaxLength(64);

            entity.HasOne(d => d.Client).WithMany(p => p.Devices)
                .HasForeignKey(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Devices_Clients");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
