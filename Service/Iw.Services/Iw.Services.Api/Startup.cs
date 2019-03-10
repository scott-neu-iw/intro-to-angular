using Iw.Services.Api.Repositories;
using Iw.Services.Api.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
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

         services.AddMvc();
         services.AddApiVersioning();

         // add services to the IOC
         services.AddSingleton<IMemoryStoreService, MemoryStoreService>();
         services.AddSingleton<IKeyGenerationService, KeyGenerationService>();
         services.AddScoped<IToDoRepository, ToDoRepository>();
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IHostingEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
         }

         app.UseMvc();
      }
   }
}
