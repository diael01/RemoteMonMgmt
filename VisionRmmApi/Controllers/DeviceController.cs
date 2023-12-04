using Contracts.Interfaces;
using Contracts.Models;
using Contracts.Validatidation;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace VisionRmmApi.Controllers
{
  [ApiController]
  [Route("/api/v1/device")]
  //[Authorize]
  public class DeviceController : ControllerBase
  {

    IDeviceService DeviceService { get; set; }
    public DeviceController(IDeviceService Device)
    {
      DeviceService = Device;
    }

    [HttpGet]
    [Route("GetDevices")]
    public async Task<IActionResult> GetDevices()
    {
      var list = await DeviceService.GetDevices();
      return Ok(list);
    }

    [HttpGet]
    [Route("GetDeviceById")]
    public async Task<IActionResult> GetDeviceById([FromQuery] int id)
    {
      var Device = await DeviceService.GetDeviceById(id);
      return Device != null ? Ok(Device) : Problem(Constants.VissionRMMError);
    }

    [HttpPost]
    [Route("AddDevice")]
    public async Task<IActionResult> AddDevice([FromBody] DeviceDTO Device)
    {
      new DeviceValidator().ValidateAndThrow(Device);
      var id = await DeviceService.AddDevice(Device);
      return id > 0 ? Ok(id) : Problem(Constants.VissionRMMError);
    }

    [HttpPut]
    [Route("UpdateDevice")]
    public async Task<IActionResult> UpdateDevice([FromBody] DeviceDTO Device)
    {
      new DeviceValidator().ValidateAndThrow(Device);
      var id = await DeviceService.UpdateDevice(Device);
      return id > 0 ? Ok(id) : Problem(Constants.VissionRMMError);
    }

    [HttpGet]
    [Route("DeleteDevice")]
    public async Task DeleteDevice([FromQuery] int id)
    {
      await DeviceService.DeleteDevice(id);
    }


  }
}
