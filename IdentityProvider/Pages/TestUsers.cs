// Copyright (c) Duende Software. All rights reserved.
// See LICENSE in the project root for license information.


using Duende.IdentityServer.Test;
using IdentityModel;
using System.Security.Claims;

namespace identityprovider;

public class TestUsers
{
  public static List<TestUser> Users
  {
    get
    {
      var address = new
      {
        street_address = "RMM Test Address",
        locality = "VisionRMM"
      };

      return new List<TestUser>
        {
            new TestUser
            {
                SubjectId = "1",
                Username = "admin",
                Password = "adminpwd",
                Claims =
                {
                    new Claim(JwtClaimTypes.Role, "admin"),
                    new Claim(JwtClaimTypes.Name, "FirstName LastName"),
                    //new Claim(JwtClaimTypes.GivenName, "AdminFirst"),
                    //new Claim(JwtClaimTypes.FamilyName, "AdminLast"),
                    //new Claim(JwtClaimTypes.Email, "Admin@email.com"),
                    //new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                    //new Claim(JwtClaimTypes.WebSite, "http://visionrmm.com"),
                    //new Claim(JwtClaimTypes.Address, JsonSerializer.Serialize(address), IdentityServerConstants.ClaimValueTypes.Json)
                }
            },

        };
    }
  }
}