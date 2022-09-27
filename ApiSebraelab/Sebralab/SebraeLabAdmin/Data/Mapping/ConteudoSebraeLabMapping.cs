using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SebraeLab.Conteudo.Domain;
using SebraeLab.Conteudo.Domain.Enums;

namespace SebraeLab.Conteudo.Data.Mappings
{
    public class ConteudoSebraeLabMapping : IEntityTypeConfiguration<ConteudoSebraeLab>
    {
        public void Configure(EntityTypeBuilder<ConteudoSebraeLab> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Titulo)
                .IsRequired()
                .HasColumnType("varchar(150)");

            builder.Property(c => c.Subtitulo)
                 .HasColumnType("varchar(150)");

            builder.Property(c => c.Legenda)
           .HasColumnType("varchar(150)");
     
            builder.Property(c => c.Descricao).IsRequired();

            builder.Property(p => p.Status).IsRequired()
            .HasConversion(new ConversorStatusConteudo());

            builder.Property(p => p.Tipopublicacao).IsRequired().HasMaxLength(2)                
            .HasConversion(new ConversorTipoPublicacao()).HasColumnType("nvarchar(2)");

            builder.ToTable("ConteudosSebraeLab");
        }
    }
}