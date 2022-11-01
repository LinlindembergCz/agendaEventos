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


            builder.ToTable("NewsLetter");
        }
    }
}