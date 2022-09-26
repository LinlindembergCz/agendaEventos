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

            builder.Property(c => c.Titulo)
                .IsRequired()
                .HasColumnType("varchar(250)");

            builder.Property(c => c.Descricaoevento)
                .IsRequired()
                .HasColumnType("varchar(2000)");

            builder.Property(c => c.Contato)
               .IsRequired()
               .HasColumnType("varchar(20)");

            builder.Property(c => c.Instituicao)
                   .HasColumnType("varchar(50)");

            builder.Property(c => c.Linksparainscricao)
                  .HasColumnType("varchar(50)");

            builder.Property(c => c.Nomecompleto)
                .IsRequired()
                  .HasColumnType("varchar(50)");

            builder.Property(c => c.Email)
                .IsRequired()
                  .HasColumnType("varchar(50)");

            builder.Property(c => c.Tipoevento)
                .IsRequired()
                .HasColumnType("varchar(150)");

            builder.Property(c => c.Status)          
            .HasColumnType("varchar(10)");

            builder.HasMany(c => c.Dias)
                .WithOne(c => c.Evento)
                .HasForeignKey(c => c.Eventoid);


            builder.ToTable("EventosSebraeLab");
        }
    }
}