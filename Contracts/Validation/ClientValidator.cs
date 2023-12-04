using Contracts.Models;
using Contracts.Validation;
using FluentValidation;

namespace Contracts.Validatidation
{
  public class ClientValidator : CascadingAbstractValidator<ClientDTO>
  {
    public ClientValidator() : base()
    {
      RuleFor(client => client).NotNull();
      RuleFor(client => client.Name).NotNull();
      RuleFor(client => client.Ip).NotNull();

    }
  }
}
