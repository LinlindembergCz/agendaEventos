using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.NewsLetter.Domain;


namespace SebraeLab.NewsLetter.Data.Mappings
{
    public class NewsLetterMapping : IEntityTypeConfiguration<InscricaoNewsLetter>
    {
        public void Configure(EntityTypeBuilder<InscricaoNewsLetter> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Nome)
            .IsRequired()
            .HasColumnType("varchar(50)");

            builder.Property(c => c.Sobrenome)
            .IsRequired()
            .HasColumnType("varchar(50)");

            builder.Property(c => c.Telefone)
            .IsRequired()
            .HasColumnType("varchar(20)");

            builder.Property(c => c.Cpf)
            .IsRequired()
            .HasColumnType("varchar(15)");

            builder.Property(c => c.Cnpj)
            .HasColumnType("varchar(20)");

            builder.Property(c => c.Email)
            .IsRequired()
            .HasColumnType("varchar(250)");

            builder.ToTable("NewsLetter");
        }
    }
}