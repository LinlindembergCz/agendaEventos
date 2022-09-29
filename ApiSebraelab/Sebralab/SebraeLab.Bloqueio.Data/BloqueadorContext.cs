using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SebraeLab.Core.Data;
using SebraeLab.Bloqueio.Domain;

namespace SebraeLab.Bloqueio.Data
{
     public class BloqueadorContext : DbContext, IUnitOfWork
    {

        public BloqueadorContext(DbContextOptions<BloqueadorContext> options)
          : base(options) { }

        public DbSet<Bloqueador> Bloqueio { get; set; }

        public DbSet<DiaBloqueado> Dias { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /* foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(
                 e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                 property.Relational().ColumnType = "varchar(100)"; */

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(BloqueadorContext).Assembly);
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