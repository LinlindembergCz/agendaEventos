using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Evento.Domain;

namespace NerdStore.Catalogo.Data.Mappings
{
    public class DiaEventoSebraeLabMapping : IEntityTypeConfiguration<DiaEventoSebraeLab>
    {
        public void Configure(EntityTypeBuilder<DiaEventoSebraeLab> builder)
        {
            builder.HasKey(c => c.Id);
            // 1 : N
            builder.HasOne(c => c.Evento).WithMany(c => c.Dias);


            builder.Property(c => c.Horainicio)
                .IsRequired()
                .HasColumnType("varchar(5)");

            builder.Property(c => c.Horafim)
                .IsRequired()
                .HasColumnType("varchar(5)");

            builder.Property(c => c.Option)
               .IsRequired()
               .HasColumnType("varchar(100)");

            builder.Property(c => c.Status)
                .HasColumnType("varchar(10)");

            builder.ToTable("DiasEventoSebraeLab");
        }
    }
}