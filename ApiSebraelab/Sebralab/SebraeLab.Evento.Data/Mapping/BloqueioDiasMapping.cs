using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Evento.Domain;

namespace NerdStore.Catalogo.Data.Mappings
{
    public class BloqueioDiaMapping : IEntityTypeConfiguration<BloqueioDia>
    {
        public void Configure(EntityTypeBuilder<BloqueioDia> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Data)
                .IsRequired()
                .HasColumnType("datetime");       


            builder.ToTable("BloqueioDias");
        }
    }
}