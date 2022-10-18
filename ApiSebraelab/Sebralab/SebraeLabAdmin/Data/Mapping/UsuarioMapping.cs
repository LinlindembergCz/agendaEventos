using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sebraelab.Usuario.Domain;

namespace SebraeLab.Evento.Data.Mappings
{
    public class UsuarioMapping : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Login)
                .IsRequired()
                .HasColumnType("varchar(20)");

            builder.Property(c => c.Senha)
                  .HasColumnType("varchar(20)");

            builder.ToTable("Usuarios");
        }
    }
}