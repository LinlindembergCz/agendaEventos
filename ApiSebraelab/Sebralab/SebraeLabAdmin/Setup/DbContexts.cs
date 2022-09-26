using Microsoft.EntityFrameworkCore;
using SebraeLab.Conteudo.App.AutoMapper;
using SebraeLab.Conteudo.Data;
using SebraeLab.Evento.App.AutoMapper;
using SebraeLab.Evento.Data;

namespace SebraeLabAdmin.Setup
{
    public static class DbContexts
    {
        public static void RegisterDbContexts(this WebApplicationBuilder builder)
        {
            // Add services to the container.
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddDbContext<EventoSebraeLabContext>(options =>
                       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddDbContext<ConteudoSebraeLabContext>(options =>
                       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

        }
    }
}
