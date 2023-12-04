using AutoMapper;
using Contracts.Interfaces;
using Contracts.Models;
using Microsoft.EntityFrameworkCore;
using Repository.Models;

namespace Services
{

  public class ClientService : IClientService
  {
    VisionRmmContext Context { get; set; }
    private readonly IMapper Mapper;

    public ClientService(VisionRmmContext context, IMapper map)
    {
      Context = context;
      Mapper = map;
    }

    public async Task<IEnumerable<ClientDTO>> GetClientsAndSites()
    {
      var clients = await Context.Clients.AsQueryable().ToListAsync();
      return Mapper.Map<IEnumerable<ClientDTO>>(clients);
    }

    public async Task<IEnumerable<ClientDTO>> GetClients()
    {
      var clients = await Context.Clients.Where(c=>c.MainId == null).AsQueryable().ToListAsync();
      return Mapper.Map<IEnumerable<ClientDTO>>(clients);
    }

    public async Task<ClientDTO> GetClientById(int id)
    {
      var client = await Context.Clients.Where(c => id == c.Id!).FirstOrDefaultAsync();
      return Mapper.Map<ClientDTO>(client);
    }

    public async Task<int> AddClient(ClientDTO cli)
    {
      var clidb = Mapper.Map<Client>(cli);
      clidb.CreatedAt = clidb.UpdatedAt = DateTime.Today;
      clidb.CreatedBy = clidb.UpdatedBy = Constants.API;

      await Context.AddAsync(clidb);
      await Context.SaveChangesAsync();
      var Client = await Context.Clients.Where(c => c.Name.Equals(clidb.Name) && c.Ip.Equals(clidb.Ip)).FirstOrDefaultAsync();
      //Client shant be null, however if is null something awfully wrong happened thus will throw
      return Client!.Id;
    }

    public async Task<int> UpdateClient(ClientDTO cli)
    {
      var clidb = Mapper.Map<Client>(cli);
      clidb.UpdatedAt = DateTime.Today;
      clidb.UpdatedBy = Constants.API;
      Context.Update(clidb);
      await Context.SaveChangesAsync();
      var Client = await Context.Clients.Where(c => c.Id.Equals(cli.Id)).FirstOrDefaultAsync();
      return Client!.Id;
    }

    public async Task DeleteClient(int id)
    {
      var Client = await Context.Clients.Where(c => c.Id.Equals(id)).FirstOrDefaultAsync();
      Context.Remove(Client!);
      await Context.SaveChangesAsync();
    }
  }
}