using sebraelab.core.comunication;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data.Repository;
using SebraeLab.Toten.App.Services;
using SebraeLab.Toten.Data.Repository;

namespace SebraeLabToten.Setup
{
    public static class DependencyInjection
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IEventoSebraeLabRepository, EventoSebraeLabRepository>();
            services.AddScoped<IEventoSebraeLabAppService, EventoSebraeLabAppService>();

            services.AddScoped<IFeedbackUsuarioRepository, FeedbackUsuarioRepository>();
            services.AddScoped<IFeedbackUsuarioService, FeedbackUsuarioService>();
        }
    }
}
