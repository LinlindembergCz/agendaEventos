using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SebraeLab.NewsLetter.Domain;
using SebraeLab.Core.Data;
using System.Collections.Generic;
using SebraeLab.Core.Exceptions;

namespace SebraeLab.NewsLetter.Data
{
     public class NewsLetterContext : DbContext, IUnitOfWork
    {
       public NewsLetterContext(DbContextOptions<NewsLetterContext> options)
        : base(options) { }

        public DbSet<InscricaoNewsLetter> NewsLetter { get; set; }

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

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(NewsLetterContext).Assembly);
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