using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Evento.Domain;

namespace NerdStore.Catalogo.Data.Mappings
{
    public class EventoSebraeLabMapping : IEntityTypeConfiguration<EventoSebraeLab>
    {
        public void Configure(EntityTypeBuilder<EventoSebraeLab> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Titulo)
                .IsRequired()
                .HasColumnType("varchar(250)");

            builder.Property(c => c.Descricaoevento)
                .IsRequired()
                .HasColumnType("varchar(500)");


            builder.HasMany(c => c.Dias)
                    .WithOne(c => c.Evento)
                    .HasForeignKey(c => c.Id);


            builder.ToTable("EventosSebraeLab");
        }
    }
}