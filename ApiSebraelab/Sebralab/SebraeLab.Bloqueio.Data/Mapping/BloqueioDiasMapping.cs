using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Bloqueio.Domain;

namespace SebraeLab.BloqueioDia.Data.Mappings
{
    public class BloqueioDiaMapping : IEntityTypeConfiguration<DiaBloqueado>
    {
        public void Configure(EntityTypeBuilder<DiaBloqueado> builder)
        {
            builder.HasKey(c => c.Id);
            builder.ToTable("DiasBloqueados");
        }
    }
}