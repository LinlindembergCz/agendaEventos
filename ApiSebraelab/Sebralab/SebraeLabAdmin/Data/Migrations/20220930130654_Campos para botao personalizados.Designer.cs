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
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220930130654_Campos para botao personalizados")]
    partial class Camposparabotaopersonalizados
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("SebraeLab.Bloqueio.Domain.Bloqueador", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Datacadastro")
                        .HasColumnType("datetime2");

                    b.Property<string>("Motivo")
                        .IsRequired()
                        .HasColumnType("varchar(250)");

                    b.HasKey("Id");

                    b.ToTable("Bloqueador", (string)null);
                });

            modelBuilder.Entity("SebraeLab.Bloqueio.Domain.DiaBloqueado", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("Bloqueadorid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("Data")
                        .IsRequired()
                        .HasColumnType("datetime");

                    b.Property<string>("Horafim")
                        .HasColumnType("varchar(5)");

                    b.Property<string>("Horainicio")
                        .HasColumnType("varchar(5)");

                    b.Property<string>("Options")
                        .HasColumnType("varchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("Bloqueadorid");

                    b.ToTable("DiasBloqueados", (string)null);
                });

            modelBuilder.Entity("SebraeLab.Conteudo.Domain.ConteudoSebraeLab", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool?>("Ativo")
                        .HasColumnType("bit");

                    b.Property<DateTime>("Datacadastro")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("Datapublicacao")
                        .HasColumnType("datetime2");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Legenda")
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Linkredirecionamento")
                        .HasColumnType("varchar(300)");

                    b.Property<bool?>("Personalizadodesativado")
                        .HasColumnType("bit");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(1)");

                    b.Property<string>("Subtitulo")
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Tipopublicacao")
                        .IsRequired()
                        .HasMaxLength(2)
                        .HasColumnType("nvarchar(2)");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<string>("Titulobotao")
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Titulochamada")
                        .HasColumnType("varchar(150)");

                    b.HasKey("Id");

                    b.ToTable("ConteudosSebraeLab", (string)null);
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

                    b.Property<DateTime>("Datacadastro")
                        .HasColumnType("datetime2");

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

            modelBuilder.Entity("SebraeLab.Bloqueio.Domain.DiaBloqueado", b =>
                {
                    b.HasOne("SebraeLab.Bloqueio.Domain.Bloqueador", "Bloqueador")
                        .WithMany("Dias")
                        .HasForeignKey("Bloqueadorid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bloqueador");
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

            modelBuilder.Entity("SebraeLab.Bloqueio.Domain.Bloqueador", b =>
                {
                    b.Navigation("Dias");
                });

            modelBuilder.Entity("SebraeLab.Evento.Domain.EventoSebraeLab", b =>
                {
                    b.Navigation("Dias");
                });
#pragma warning restore 612, 618
        }
    }
}
