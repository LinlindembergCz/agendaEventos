using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SebraeLab.Toten.Domain;
using SebraeLab.Toten.Data.Conversores;

namespace SebraeLab.Toten.Data.Mapping
{
    public class FeedbackUsuarioMapping : IEntityTypeConfiguration<FeedbackUsuario>
    {
        public void Configure(EntityTypeBuilder<FeedbackUsuario> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(p => p.TipoVisita)
                .HasConversion(new ConversorTipoFeedback());

            builder.Property(c => c.NomeUsuario)
               .IsRequired()
               .HasColumnType("varchar(250)");

            builder.Property(c => c.EmailUsuario)
              .IsRequired()
              .HasColumnType("varchar(250)");

            builder.Property(c => c.CPFUsuario)
              .IsRequired()
              .HasColumnType("varchar(20)");

            builder.Property(c => c.Telefone)
             .IsRequired()
             .HasColumnType("varchar(20)");

            builder.Property(c => c.OutroMotivo)
                   .HasColumnType("varchar(250)");

            builder.ToTable("FeedbackUsuario");
        }
    }
}