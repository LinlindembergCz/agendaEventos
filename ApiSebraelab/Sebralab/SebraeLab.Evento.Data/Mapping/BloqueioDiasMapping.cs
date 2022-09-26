using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Evento.Domain;

namespace SebraeLab.Bloqueio.Data.Mappings
{
    public class BloqueioDiaMapping : IEntityTypeConfiguration<BloqueioDia>
    {
        public void Configure(EntityTypeBuilder<BloqueioDia> builder)
        {
            builder.HasKey(c => c.Id);


            builder.ToTable("BloqueioDias");
        }
    }
}