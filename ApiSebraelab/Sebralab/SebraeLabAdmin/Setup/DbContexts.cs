using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using SebraeLab.Bloqueio.Data;
using SebraeLab.Conteudo.App.AutoMapper;
using SebraeLab.Conteudo.Data;
using SebraeLab.Evento.App.AutoMapper;
using SebraeLab.Evento.Data;
using Microsoft.Extensions.Logging;
using SebraeLab.NewsLetter.Data;

namespace SebraeLabAdmin.Setup
{   
    public static class DbContexts
    {
        private static readonly StreamWriter _writer = new StreamWriter("sebraelab_log.txt", append: true);

        public static void RegisterDbContexts(this WebApplicationBuilder builder)
        {
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            // Add services to the container.
            builder.Services.AddDbContext<ApplicationDbContext>(options =>options.UseSqlServer(connectionString));
            builder.Services.AddDbContext<EventoSebraeLabContext>(options =>options.UseSqlServer(connectionString, o => o.MaxBatchSize(100).CommandTimeout(5).EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null)).LogTo( _writer.WriteLine, LogLevel.Information).EnableSensitiveDataLogging() );
            builder.Services.AddDbContext<ConteudoSebraeLabContext>(options => options.UseSqlServer(connectionString, o => o.MaxBatchSize(100).CommandTimeout(5).EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null)).LogTo( _writer.WriteLine, LogLevel.Information).EnableSensitiveDataLogging() );
            builder.Services.AddDbContext<NewsLetterContext>(options =>options.UseSqlServer(connectionString, o => o.MaxBatchSize(100).CommandTimeout(5).EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null)).LogTo(_writer.WriteLine, LogLevel.Information).EnableSensitiveDataLogging());
            builder.Services.AddDbContext<BloqueadorContext>(options =>options.UseSqlServer(connectionString));
         }
    }
}
