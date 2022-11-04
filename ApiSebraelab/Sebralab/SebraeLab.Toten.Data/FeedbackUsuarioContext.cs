using Microsoft.EntityFrameworkCore;
using SebraeLab.Core.Data;
using SebraeLab.Toten.Domain;

namespace SebraeLab.Toten.Data
{
    public class FeedbackUsuarioContext : DbContext
    {
        public FeedbackUsuarioContext(DbContextOptions<FeedbackUsuarioContext> options): base(options) {
        }

        public DbSet<FeedbackUsuario> FeedbackUsuario { get; set; }

    }
}