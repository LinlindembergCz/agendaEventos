using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Evento.Domain;

namespace SebraeLab.Evento.Data.Mappings
{
    public class EventoSebraeLabMapping : IEntityTypeConfiguration<EventoSebraeLab>
    {
        public void Configure(EntityTypeBuilder<EventoSebraeLab> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(p => p.Status)
            .HasConversion(new ConversorStatus());

            builder.ToTable("EventosSebraeLab");
        }
    }
}