using AutoMapper;
using Contracts.Models;
using Repository.Models;

namespace Contracts.Mapping
{
  public class DeviceProfile : Profile
  {
    public DeviceProfile()
    {
      CreateMap<Device, DeviceDTO>();
      CreateMap<DeviceDTO, Device>();
    }
  }
}
