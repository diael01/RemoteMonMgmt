using Contracts.Settings;
using FluentAssertions;
using RmmApi.Controllers;

namespace UnitTests
{
  [TestClass]
  public class HealthUnitTest : BaseUnitTest
  {
    AppSettings settings = new AppSettings();
    HealthController health;
    public HealthUnitTest()
    {
      settings.ApplicationName = "UnitTest";
      settings.Version = "1";
      mockService.Setup(x => x.GetService(settings.GetType())).Returns(settings);
      health = new HealthController(mockService.Object);
    }

    [TestMethod]
    public void GetHealth_Unit_Should_Be_OK()
    {
      //Act
      var response = health.GetHealth();

      //Assert      
      response.Should().Be(string.Format(Constants.Health, "UnitTest", "1"));
    }

    [TestMethod]
    public void TestExceptionThrow_Should_Fail()
    {
      try
      {
        health.GetHealthThrowException();
      } catch (Exception ex)
      {
        ex.Message.Should().Be(Constants.TestException);
      }
    }
  }
}