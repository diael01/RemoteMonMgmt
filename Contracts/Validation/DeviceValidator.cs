using Contracts.Models;
using Contracts.Validation;
using FluentValidation;

namespace Contracts.Validatidation
{
  public class DeviceValidator : CascadingAbstractValidator<DeviceDTO>
  {
    public DeviceValidator() : base()
    {
      RuleFor(Device => Device).NotNull();
      RuleFor(Device => Device.Name).NotNull();
      RuleFor(Device => Device.Ip).NotNull();     
      RuleFor(Device => Device.Type).NotNull();


    }
  }
}
