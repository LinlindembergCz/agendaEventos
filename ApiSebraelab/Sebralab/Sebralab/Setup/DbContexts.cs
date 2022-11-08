using Microsoft.EntityFrameworkCore;
using SebraeLab.Bloqueio.Data;
using SebraeLab.Conteudo.Data;
using SebraeLab.Evento.Data;
using SebraeLab.NewsLetter.Data;

namespace SebraeLabAdmin.Setup
{
    public static class DbContexts
    {
        public static void RegisterDbContexts(this WebApplicationBuilder builder)
        {

            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            // Add services to the container.
            builder.Services.AddDbContext<EventoSebraeLabContext>(options =>options.UseSqlServer(connectionString, o => o.MaxBatchSize(100).CommandTimeout(5).EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null)));
            builder.Services.AddDbContext<ConteudoSebraeLabContext>(options =>options.UseSqlServer(connectionString, o => o.MaxBatchSize(100).CommandTimeout(5).EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null)));
            builder.Services.AddDbContext<NewsLetterContext>(options =>options.UseSqlServer(connectionString, o => o.MaxBatchSize(100).CommandTimeout(5).EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null)));
            builder.Services.AddDbContext<BloqueadorContext>(options =>options.UseSqlServer(connectionString));

        }
    }
}
