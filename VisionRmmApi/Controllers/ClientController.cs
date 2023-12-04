using Contracts.Interfaces;
using Contracts.Models;
using Contracts.Validatidation;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace VisionRmmApi.Controllers
{
  [ApiController]
  [Route("/api/v1/client")]
  //[Authorize]
  public class ClientController : ControllerBase
  {
    IClientService ClientService { get; set; }
    public ClientController(IClientService client)
    {
      ClientService = client;
    }

    [HttpGet]
    [Route("GetClientsAndSites")]
    public async Task<IActionResult> GetClientsAndSites()
    {
      var list = await ClientService.GetClientsAndSites();
      return Ok(list);
    }

    [HttpGet]
    [Route("GetClients")]
    public async Task<IActionResult> GetClients()
    {
      var list = await ClientService.GetClients();
      return Ok(list);
    }

    [HttpGet]
    [Route("GetClientById")]
    public async Task<IActionResult> GetClientById([FromQuery] int id)
    {
      var client = await ClientService.GetClientById(id);
      return client != null ? Ok(client) : Problem(Constants.VissionRMMError);
    }

    [HttpPost]
    [Route("AddClient")]
    public async Task<IActionResult> AddClient([FromBody] ClientDTO client)
    {
      new ClientValidator().ValidateAndThrow(client);
      var id = await ClientService.AddClient(client);
      return id > 0 ? Ok(id) : Problem(Constants.VissionRMMError);
    }

    [HttpPut]
    [Route("UpdateClient")]
    public async Task<IActionResult> UpdateClient([FromBody] ClientDTO client)
    {
      new ClientValidator().ValidateAndThrow(client);
      var id = await ClientService.UpdateClient(client);
      return id > 0 ? Ok(id) : Problem(Constants.VissionRMMError);
    }

    [HttpGet]
    [Route("DeleteClient")]
    public async Task DeleteClient([FromQuery] int id)
    {
      await ClientService.DeleteClient(id);
    }
  }
}
