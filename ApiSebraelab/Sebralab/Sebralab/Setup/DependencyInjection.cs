
using Microsoft.Extensions.DependencyInjection;

using SebraeLab.Evento.Data.Repository;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data;
using SebraeLab.Conteudo.Data.Repository;
using SebraeLab.Conteudo.App.Services;
using SebraeLab.Conteudo.Data;
using sebraelab.core.comunication;

namespace SebraeLabAdmin.Setup
{
    public static class DependencyInjection
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IFileTransfer, FileTransfer>();

            services.AddScoped<IEventoSebraeLabRepository, EventoSebraeLabRepository>();
            services.AddScoped<IEventoSebraeLabAppService, EventoSebraeLabAppService>();

            services.AddScoped<IConteudoSebraeLabRepository, ConteudoSebraeLabRepository>();
            services.AddScoped<IConteudoSebraeLabAppService, ConteudoSebraeLabAppService>();

            services.AddScoped<EventoSebraeLabContext>();

            services.AddScoped<ConteudoSebraeLabContext>();


        }
    }
}