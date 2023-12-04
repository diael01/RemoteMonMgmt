using AutoMapper;
using Contracts.Mapping;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moq;
using Repository.Models;

namespace UnitTests
{
  public class BaseUnitTest
  {
    protected VisionRmmContext DBContext;
    protected Mock<IServiceProvider> mockService = new Mock<IServiceProvider>();
    protected IMapper mapper;

    public BaseUnitTest()
    {
      Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "Development");
      var optionsBuilder = new DbContextOptionsBuilder<VisionRmmContext>();
      var conn = GetTestDataConfiguration().GetConnectionString("VisionRmmDB");
      optionsBuilder.UseSqlServer(conn);
      DBContext = new VisionRmmContext(optionsBuilder.Options);
      if (mapper == null)
      {
        var mappingConfig = new MapperConfiguration(mc =>
        {
          mc.AddProfile(new ClientProfile());
          mc.AddProfile(new DeviceProfile());
        });
        mapper = mappingConfig.CreateMapper();
      }
    }

    public static IConfiguration GetTestDataConfiguration()
    {
      var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
      return new ConfigurationBuilder()
          .SetBasePath(Directory.GetCurrentDirectory())
          .AddJsonFile(@"apsettings.json", true, false)
          .AddJsonFile($"appsettings.{environment}.json", true, true)
          .AddEnvironmentVariables()
          .Build();
    }
  }
}
