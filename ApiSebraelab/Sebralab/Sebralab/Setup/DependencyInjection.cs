
using Microsoft.Extensions.DependencyInjection;

using SebraeLab.Evento.Data.Repository;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data;
using SebraeLab.Conteudo.Data.Repository;
using SebraeLab.Conteudo.App.Services;
using SebraeLab.Conteudo.Data;
using sebraelab.core.comunication;
using SebraeLab.Bloqueio.App.Services;
using SebraeLab.Bloqueio.Data.Repository;
using SebraeLab.Bloqueio.Data;
using SebraeLab.NewsLetter.App.Services;
using SebraeLab.NewsLetter.Data.Repository;
using Microsoft.Extensions.Configuration;
using SebraeLab.Core.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SebraeLabAdmin.Setup
{
    public static class DependencyInjection
    {
        public static IAppConfig AppConfig { get; private set; }
        public static void RegisterServices(this WebApplicationBuilder builder)
        {
            AppConfig = new AppConfigDev(builder.Configuration);

            builder.Services.AddSingleton(AppConfig);

            builder.Services.AddScoped<ISenderEmail, SenderEmail>();

            builder.Services.AddScoped<IEventoSebraeLabRepository, EventoSebraeLabRepository>();
            builder.Services.AddScoped<IEventoSebraeLabAppService, EventoSebraeLabAppService>();

            builder.Services.AddScoped<IConteudoSebraeLabRepository, ConteudoSebraeLabRepository>();
            builder.Services.AddScoped<IConteudoSebraeLabAppService, ConteudoSebraeLabAppService>();

            builder.Services.AddScoped<IBloqueadorRepository, BloqueadorRepository>();
            builder.Services.AddScoped<IBloqueadorAppService, BloqueadorAppService>();

            builder.Services.AddScoped<INewsLetterRepository, NewsLetterRepository>();
            builder.Services.AddScoped<INewsLetterAppService, NewsLetterAppService>();

            builder.Services.AddScoped<EventoSebraeLabContext>();
            builder.Services.AddScoped<ConteudoSebraeLabContext>();
            builder.Services.AddScoped<BloqueadorContext>();


        }
    }
}