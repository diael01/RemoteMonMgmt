using Contracts.Models;

namespace Contracts.Interfaces
{
  public interface IClientService
  {
    Task<IEnumerable<ClientDTO>> GetClientsAndSites();
    Task<IEnumerable<ClientDTO>> GetClients();

    Task<ClientDTO> GetClientById(int id);

    Task<int> AddClient(ClientDTO client);

    Task<int> UpdateClient(ClientDTO client);

    Task DeleteClient(int clientId);
  }
}
