
using Microsoft.Extensions.DependencyInjection;

using SebraeLab.Evento.Data.Repository;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data;
using SebraeLab.Conteudo.Data.Repository;
using SebraeLab.Conteudo.App.Services;
using SebraeLab.Conteudo.Data;
using SebraeLab.Bloqueio.App.Services;
using SebraeLab.Bloqueio.Data.Repository;
using SebraeLab.Bloqueio.Data;
using SebraeLab.NewsLetter.Data.Repository;
using SebraeLab.NewsLetter.App.Services;
using SebraeLab.NewsLetter.Data;

namespace SebraeLabAdmin.Setup
{
    public static class DependencyInjection
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IEventoSebraeLabRepository, EventoSebraeLabRepository>();
            services.AddScoped<IEventoSebraeLabAppService, EventoSebraeLabAppService>();

            services.AddScoped<IConteudoSebraeLabRepository, ConteudoSebraeLabRepository>();
            services.AddScoped<IConteudoSebraeLabAppService, ConteudoSebraeLabAppService>();

            services.AddScoped<IBloqueadorRepository, BloqueadorRepository>();
            services.AddScoped<IBloqueadorAppService, BloqueadorAppService>();

            services.AddScoped<INewsLetterRepository, NewsLetterRepository>();
            services.AddScoped<INewsLetterAppService, NewsLetterAppService>();

            services.AddScoped<EventoSebraeLabContext>();

            services.AddScoped<ConteudoSebraeLabContext>();

            services.AddScoped<BloqueadorContext>();

            services.AddScoped<NewsLetterContext>();

            services.AddScoped<ApplicationDbContext>();
        }
    }
}