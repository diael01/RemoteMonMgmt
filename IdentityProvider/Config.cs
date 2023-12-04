// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using Duende.IdentityServer.Models;

namespace IdentityProvider
{
  public static class Config
  {
    public static IEnumerable<IdentityResource> IdentityResources =>
        new IdentityResource[]
        {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResource(name: "roles",
                    userClaims: new[] { "role" }, displayName: "Your roles")
        };

    public static IEnumerable<ApiScope> ApiScopes =>
        new ApiScope[]
        {
                new ApiScope("VisionRmmApi.basicAccess", "Basic access to Vision RMM API")
        };

    public static IEnumerable<ApiResource> ApiResources =>
        new ApiResource[]
        {
                new ApiResource
                {
                    Name = "VisionRmmApi",
                    Description = "Vision RMM API",
                    Scopes = new List<string> {"VisionRmmApi.basicAccess" },
                    UserClaims = new[] { "role" }
                }

        };

    public static IEnumerable<Client> Clients =>
        new Client[]
        {
                // interactive client using code flow + pkce
                new Client
                {
                    ClientId = "VisionRmmApi",
                    ClientName = "Vision Rmm Api",
                    RequireConsent = false,

                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    RedirectUris = {"https://localhost:4001/signin-oidc"},
                    PostLogoutRedirectUris = {"https://localhost:4001"},

                    AllowedScopes =
                    {
                        "openid",
                        "roles",
                        "profile",
                        "VisionRmmApi.basicAccess",
                    },

                    AlwaysIncludeUserClaimsInIdToken = true,
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,
                    AllowOfflineAccess = true
                },
        };
  }
}

