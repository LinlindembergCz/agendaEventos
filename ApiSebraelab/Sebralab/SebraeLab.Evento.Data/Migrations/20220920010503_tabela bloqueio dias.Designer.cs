﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SebraeLab.Evento.Data;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    [DbContext(typeof(EventoSebraeLabContext))]
    [Migration("20220920010503_tabela bloqueio dias")]
    partial class tabelabloqueiodias
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("SebraeLab.Evento.Domain.BloqueioDia", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Data")
                        .HasColumnType("datetime");

                    b.HasKey("Id");

                    b.ToTable("BloqueioDias", (string)null);
                });

            modelBuilder.Entity("SebraeLab.Evento.Domain.DiaEventoSebraeLab", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("Data")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("Eventoid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Horafim")
                        .IsRequired()
                        .HasColumnType("varchar(5)");

                    b.Property<string>("Horainicio")
                        .IsRequired()
                        .HasColumnType("varchar(5)");

                    b.Property<string>("Option")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Status")
                        .HasColumnType("varchar(10)");

                    b.HasKey("Id");

                    b.HasIndex("Eventoid");

                    b.ToTable("DiasEventoSebraeLab", (string)null);
                });

            modelBuilder.Entity("SebraeLab.Evento.Domain.EventoSebraeLab", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Contato")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Descricaoevento")
                        .IsRequired()
                        .HasColumnType("varchar(2000)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<bool?>("Imagempersonalida")
                        .HasColumnType("bit");

                    b.Property<string>("Instituicao")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Linksparainscricao")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Nomecompleto")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<int?>("Numeroparticipantes")
                        .HasColumnType("int");

                    b.Property<bool?>("Publicaosite")
                        .HasColumnType("bit");

                    b.Property<string>("Status")
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Tipoevento")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.HasKey("Id");

                    b.ToTable("EventosSebraeLab", (string)null);
                });

            modelBuilder.Entity("SebraeLab.Evento.Domain.DiaEventoSebraeLab", b =>
                {
                    b.HasOne("SebraeLab.Evento.Domain.EventoSebraeLab", "Evento")
                        .WithMany("Dias")
                        .HasForeignKey("Eventoid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Evento");
                });

            modelBuilder.Entity("SebraeLab.Evento.Domain.EventoSebraeLab", b =>
                {
                    b.Navigation("Dias");
                });
#pragma warning restore 612, 618
        }
    }
}
