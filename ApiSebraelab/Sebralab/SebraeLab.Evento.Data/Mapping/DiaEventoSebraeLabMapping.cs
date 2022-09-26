using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Evento.Domain;

namespace SebraeLab.Dia.Data.Mappings
{
    public class DiaEventoSebraeLabMapping : IEntityTypeConfiguration<DiaEventoSebraeLab>
    {
        public void Configure(EntityTypeBuilder<DiaEventoSebraeLab> builder)
        {
            builder.HasKey(c => c.Id);

            builder.ToTable("DiasEventoSebraeLab");
        }
    }
}