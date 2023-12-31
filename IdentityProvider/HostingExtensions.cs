using identityprovider;
using Serilog;

namespace IdentityProvider;

internal static class HostingExtensions
{
  public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
  {

    builder.Services.AddRazorPages();

    builder.Services.AddIdentityServer(options =>
        {
          // https://docs.duendesoftware.com/identityserver/v6/fundamentals/resources/api_scopes#authorization-based-on-scopes
          options.EmitStaticAudienceClaim = true;
          //consider this for manual key generation: https://docs.duendesoftware.com/identityserver/v6/fundamentals/keys/static_key_management/          
        })
        .AddInMemoryIdentityResources(Config.IdentityResources)
        .AddInMemoryApiScopes(Config.ApiScopes)
        .AddInMemoryClients(Config.Clients)
        .AddTestUsers(TestUsers.Users);
    //.AddServerSideSessions();

    return builder.Build();
  }

  public static WebApplication ConfigurePipeline(this WebApplication app)
  {
    app.UseSerilogRequestLogging();

    if (app.Environment.IsDevelopment())
    {
      app.UseDeveloperExceptionPage();
    }

    app.UseStaticFiles();
    app.UseRouting();
    app.UseIdentityServer();

    app.UseAuthorization();
    app.MapRazorPages().RequireAuthorization();

    return app;
  }
}
