using AutoMapper;
using Contracts.Interfaces;
using Contracts.Mapping;
using Contracts.Settings;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Services;

namespace VisionRmmApi.Extensions
{
  public static class DIExtension
  {
    public static IServiceCollection AddDI(this IServiceCollection svc, IConfiguration cfg)
    {
      var settings = cfg.GetSection("Settings").Get<AppSettings>();
      if (settings != null)
        svc.AddSingleton(settings);
      svc.TryAddScoped<IClientService, ClientService>();
      svc.TryAddScoped<IDeviceService, DeviceService>();
      svc.AddAutoMapper(typeof(ClientProfile), typeof(DeviceProfile));
      return svc;
    }
  }
}
