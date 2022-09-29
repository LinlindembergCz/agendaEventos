using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Bloqueio.Domain;

namespace SebraeLab.Bloqueio.Data.Mappings
{
    public class BloqueioDiaMapping : IEntityTypeConfiguration<DiaBloqueado>
    {
        public void Configure(EntityTypeBuilder<DiaBloqueado> builder)
        {
            builder.HasKey(c => c.Id);

            builder.HasOne(c => c.Bloqueador).WithMany(c => c.Dias);

            builder.Property(c => c.Data)
                .IsRequired()
                .HasColumnType("datetime");

            builder.Property(c => c.Horainicio)
                .HasColumnType("varchar(5)");

            builder.Property(c => c.Horafim)
                .HasColumnType("varchar(5)");

            builder.Property(c => c.Options)
                .HasColumnType("varchar(100)");

            builder.ToTable("DiasBloqueados");
        }
    }
}