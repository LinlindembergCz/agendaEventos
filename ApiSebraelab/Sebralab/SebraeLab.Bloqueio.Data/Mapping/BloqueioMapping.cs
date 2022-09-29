﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SebraeLab.Bloqueio.Domain;

namespace SebraeLab.Bloqueio.Data.Mappings
{
    public class BloqueioMapping : IEntityTypeConfiguration<Bloqueador>
    {
        public void Configure(EntityTypeBuilder<Bloqueador> builder)
        {
            builder.HasKey(c => c.Id);

            builder.ToTable("Bloqueador");
        }
    }
}