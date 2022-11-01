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
        private static readonly StreamWriter _writer = new StreamWriter("meu_log_do_ef_core.txt", append: true);

        public static void RegisterDbContexts(this WebApplicationBuilder builder)
        {
            // Add services to the container.
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));/*, o => o
                            .MaxBatchSize(100)
                            .CommandTimeout(5)
                            .EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null))                        
                .LogTo( _writer.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging() );*/

            builder.Services.AddDbContext<EventoSebraeLabContext>(options =>
                       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), o => o
                            .MaxBatchSize(100)
                            .CommandTimeout(5)
                            .EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null))                        
                .LogTo( _writer.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging() );

            builder.Services.AddDbContext<ConteudoSebraeLabContext>(options =>
                       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), o => o
                            .MaxBatchSize(100)
                            .CommandTimeout(5)
                            .EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null))                        
                .LogTo( _writer.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging() );

            builder.Services.AddDbContext<NewsLetterContext>(options =>
           options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), o => o
                .MaxBatchSize(100)
                .CommandTimeout(5)
                .EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null))
    .LogTo(_writer.WriteLine, LogLevel.Information)
    .EnableSensitiveDataLogging());

            builder.Services.AddDbContext<BloqueadorContext>(options =>
                       options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));/*, o => o
                            .MaxBatchSize(100)
                            .CommandTimeout(5)
                            .EnableRetryOnFailure(4, TimeSpan.FromSeconds(10), null))                        
                .LogTo( _writer.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging() );*/

        }
    }
}
