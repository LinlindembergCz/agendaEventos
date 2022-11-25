using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SebraeLab.Evento.Domain;
using SebraeLab.Core.Data;
using SebraeLab.Bloqueio.Domain;
using SebraeLab.Core.Exceptions;

namespace SebraeLab.Evento.Data
{
     public class EventoSebraeLabContext : DbContext, IUnitOfWork
    {
       public EventoSebraeLabContext(DbContextOptions<EventoSebraeLabContext> options)
          : base(options) { }

        public DbSet<EventoSebraeLab> Eventos { get; set; }

        public DbSet<DiaEventoSebraeLab> Dias { get; set; }

        public void HealthCheckDB()
        {
            if (!Database.CanConnect())
            {
                throw new DBConnectException("503");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /* foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(
                 e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                 property.Relational().ColumnType = "varchar(100)"; */

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(EventoSebraeLabContext).Assembly);
        }

        public bool Commit()
        {
            foreach (var entry in ChangeTracker.Entries().Where(entry => entry.Entity.GetType().GetProperty("Datacadastro") != null))
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Property("Datacadastro").CurrentValue = DateTime.Now;
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Property("Datacadastro").IsModified = false;
                }
            }

            return base.SaveChanges() > 0;
        }

    }
}