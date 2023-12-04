using Contracts.Models;

namespace Contracts.Interfaces
{
  public interface IDeviceService
  {
    Task<IEnumerable<DeviceDTO>> GetDevices();

    Task<DeviceDTO> GetDeviceById(int id);

    Task<int> AddDevice(DeviceDTO Device);

    Task<int> UpdateDevice(DeviceDTO Device);

    Task DeleteDevice(int DeviceId);
  }
}
