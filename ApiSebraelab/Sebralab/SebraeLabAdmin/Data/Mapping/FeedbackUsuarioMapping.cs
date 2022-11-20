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

            builder.ToTable("FeedbackUsuario");
        }
    }
}