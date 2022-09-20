using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SebraeLab.Evento.Domain;
using SebraeLab.Core.Data;


namespace SebraeLab.Evento.Data
{
     public class EventoSebraeLabContext : DbContext, IUnitOfWork
    {

        public EventoSebraeLabContext(DbContextOptions<EventoSebraeLabContext> options)
          : base(options) { }

        public DbSet<EventoSebraeLab> Eventos { get; set; }

        public DbSet<DiaEventoSebraeLab> Dias { get; set; }

        public DbSet<BloqueioDia> Bloqueio { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /* foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(
                 e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                 property.Relational().ColumnType = "varchar(100)"; */

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(EventoSebraeLabContext).Assembly);
        }

        public bool Commit()
        {
            foreach (var entry in ChangeTracker.Entries().Where(entry => entry.Entity.GetType().GetProperty("DataCadastro") != null))
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Property("DataCadastro").CurrentValue = DateTime.Now;
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Property("DataCadastro").IsModified = false;
                }
            }

            return base.SaveChanges() > 0;
        }

    }
}