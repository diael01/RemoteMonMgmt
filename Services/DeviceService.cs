using AutoMapper;
using Contracts.Interfaces;
using Contracts.Models;
using Microsoft.EntityFrameworkCore;
using Repository.Models;

namespace Services
{
  public class DeviceService : IDeviceService
  {
    VisionRmmContext Context { get; set; }
    private readonly IMapper Mapper;

    public DeviceService(VisionRmmContext context, IMapper map)
    {
      Context = context;
      Mapper = map;
    }

    public async Task<IEnumerable<DeviceDTO>> GetDevices()
    {
      var devs = await Context.Devices.AsQueryable().ToListAsync();
      return Mapper.Map<IEnumerable<DeviceDTO>>(devs);
    }

    public async Task<DeviceDTO> GetDeviceById(int id)
    {
      var dev = await Context.Devices.Where(c => id == c.Id!).FirstOrDefaultAsync();
      return Mapper.Map<DeviceDTO>(dev);
    }

    public async Task<int> AddDevice(DeviceDTO dev)
    {
      var devdb = Mapper.Map<Device>(dev);
      devdb.CreatedAt = devdb.UpdatedAt = DateTime.Today;
      devdb.CreatedBy = devdb.UpdatedBy = Constants.API;
      await Context.AddAsync(devdb);
      await Context.SaveChangesAsync();
      var Device = await Context.Devices.Where(c => c.Name.Equals(devdb.Name) && c.Ip.Equals(devdb.Ip)).FirstOrDefaultAsync();
      //Device shant be null, however if is null something awfully wrong happened thus will throw
      return Device!.Id;
    }

    public async Task<int> UpdateDevice(DeviceDTO dev)
    {
      var devdb = Mapper.Map<Device>(dev);
      devdb.UpdatedAt = DateTime.Today;
      devdb.UpdatedBy = Constants.API;
      Context.Update(devdb);
      await Context.SaveChangesAsync();
      var Device = await Context.Devices.Where(c => c.Id.Equals(devdb.Id)).FirstOrDefaultAsync();
      return Device!.Id;
    }

    public async Task DeleteDevice(int id)
    {
      var Device = await Context.Devices.Where(c => c.Id.Equals(id)).FirstOrDefaultAsync();
      Context.Remove(Device!);
      await Context.SaveChangesAsync();
    }

  }
}
