using Microsoft.EntityFrameworkCore;
using Repository.Models;

namespace VisionRmmApi.Extensions
{
  public static class DbExtension
  {
    public static void AddDbInfrastructure(this WebApplicationBuilder builder, IConfiguration cfg)
    {
      builder.Services.AddDbContext<VisionRmmContext>
          (opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("VisionRmmDB")));

    }
  }
}
