
using Microsoft.Extensions.DependencyInjection;

using SebraeLab.Evento.Data.Repository;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data;


namespace SebraeLab.WebApp.Setup
{
    public static class DependencyInjection
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IEventoSebraeLabRepository, EventoSebraeLabRepository>();
            services.AddScoped<IEventoSebraeLabAppService, EventoSebraeLabAppService>();
            services.AddScoped<EventoSebraeLabContext>();
        }
    }
}