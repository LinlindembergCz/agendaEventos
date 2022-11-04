using Microsoft.EntityFrameworkCore;
using SebraeLab.Evento.Domain;
using SebraeLab.Conteudo.Domain;
using SebraeLab.Bloqueio.Domain;
using Sebraelab.Usuario.Domain;
using SebraeLab.Toten.Domain;

namespace SebraeLab.Evento.Data
{
     public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
          : base(options) { }

        public DbSet<EventoSebraeLab> Eventos { get; set; }
        public DbSet<DiaEventoSebraeLab> Dias { get; set; }
        public DbSet<DiaBloqueado> Bloqueio { get; set; }
        public DbSet<ConteudoSebraeLab> Conteudos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<FeedbackUsuario> FeedbackUsuario { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /* foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(
                 e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                 property.Relational().ColumnType = "varchar(100)"; */

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }



    }
}