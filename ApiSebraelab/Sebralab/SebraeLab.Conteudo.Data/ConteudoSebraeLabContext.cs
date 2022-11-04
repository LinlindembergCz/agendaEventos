using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SebraeLab.Conteudo.Domain;
using SebraeLab.Core.Data;


namespace SebraeLab.Conteudo.Data
{
     public class ConteudoSebraeLabContext : DbContext, IUnitOfWork
    {

        public ConteudoSebraeLabContext(DbContextOptions<ConteudoSebraeLabContext> options)
          : base(options) { }

        public DbSet<ConteudoSebraeLab> Conteudos { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /* foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(
                 e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                 property.Relational().ColumnType = "varchar(100)"; */

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ConteudoSebraeLabContext).Assembly);
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