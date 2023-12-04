using CommonTestHelper;
using Contracts.Interfaces;
using Contracts.Models;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Services;
using VisionRmmApi.Controllers;

namespace UnitTests
{
  [TestClass]
  public class ClientUnitTest : BaseUnitTest
  {
    ClientController client;
    IClientService clientService;
    public ClientUnitTest() : base()
    {
      clientService = new ClientService(DBContext, mapper);
      client = new ClientController(clientService);
    }

    [TestMethod]
    public void GetClient_Unit_Should_Be_OK()
    {
      //Arrange
      var cli = TestData.GetClientDTO();
      var cliadd = (OkObjectResult)client.AddClient(cli).Result;
      cliadd.Should().NotBeNull();
      int id = (int)cliadd!.Value!;
      Assert.IsNotNull(id);

      //Act
      var response = (OkObjectResult)client.GetClients().Result;

      //Assert      
      response.Should().NotBeNull();
      var clires = response!.Value as IEnumerable<ClientDTO>;
      clires.Should().NotBeNull();
      clires!.Count().Should().BeGreaterThan(0);

      //delete
      client.DeleteClient(id);
    }

    [TestMethod]
    public void AddClient_Unit_Should_Be_OK()
    {
      //Act
      var response = (OkObjectResult)client.AddClient(TestData.GetClientDTO()).Result;

      //Assert      

      response.Should().NotBeNull();
      int id = (int)response!.Value!;
      //chek the length
      client.DeleteClient(id);
    }
  }
}
