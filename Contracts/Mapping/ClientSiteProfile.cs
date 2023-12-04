using AutoMapper;
using Contracts.Models;
using Repository.Models;


namespace Contracts.Mapping
{
  public class ClientProfile : Profile
  {
    public ClientProfile()
    {
      CreateMap<Client, ClientDTO>();
      CreateMap<ClientDTO, Client>();

      // Mapping when property names are different
      //CreateMap<User, UserViewModel>()
      //    .ForMember(dest =>
      //    dest.FName,
      //    opt => opt.MapFrom(src => src.FirstName))
      //    .ForMember(dest =>
      //    dest.LName,
      //    opt => opt.MapFrom(src => src.LastName));
    }
  }
}
