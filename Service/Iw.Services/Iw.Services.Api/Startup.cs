using Iw.Services.Api.Authentication;
using Iw.Services.Api.Models;
using Iw.Services.Api.Repositories;
using Iw.Services.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Iw.Services.Api
{
   public class Startup
   {
      public Startup(IConfiguration configuration)
      {
         Configuration = configuration;
      }

      public IConfiguration Configuration { get; }

      // This method gets called by the runtime. Use this method to add services to the container.
      public void ConfigureServices(IServiceCollection services)
      {
         services.AddMemoryCache();
         services.AddLogging();

         // setup app settings
         services.AddOptions();
         services.Configure<AuthenticationSettings>(Configuration.GetSection("AuthenticationSettings"));
         
         services.AddCors(options =>
         {
            options.AddPolicy("default-cors-policy",
               builder => builder.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials());
         });
         services.AddJwtAuthorization(Configuration.GetSection("AuthenticationSettings").Get<AuthenticationSettings>());

         services.AddMvc(config =>
         {
            // this forces the authrorize filter on all controllers unless explicitly setting [AllowAnonymous]
            var policy = new AuthorizationPolicyBuilder()
               .RequireAuthenticatedUser()
               .Build();
            config.Filters.Add(new AuthorizeFilter(policy));
         });
         services.AddApiVersioning();

         // add services to the IOC
         services.AddScoped<IJwtTokenService, JwtTokenService>();
         services.AddSingleton<IMemoryStoreService, MemoryStoreService>();
         services.AddSingleton<IKeyGenerationService, KeyGenerationService>();
         services.AddScoped<IToDoRepository, ToDoRepository>();
         services.AddScoped<IUserRepository, UserRepository>();
         services.AddScoped<IAuthenticationService, AuthenticationService>();
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IHostingEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
         }

         app.UseCors("default-cors-policy");
         app.UseAuthentication();
         app.UseMvc();
      }
   }
}
