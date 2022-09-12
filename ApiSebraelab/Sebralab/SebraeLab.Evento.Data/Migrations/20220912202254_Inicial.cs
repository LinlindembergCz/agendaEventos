using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EventosSebraeLab",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Titulo = table.Column<string>(type: "varchar(250)", nullable: false),
                    Numeroparticipantes = table.Column<int>(type: "int", nullable: false),
                    Tipoevento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Linksparainscricao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descricaoevento = table.Column<string>(type: "varchar(500)", nullable: false),
                    Nomecompleto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Instituicao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Contato = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Imagempersonalida = table.Column<bool>(type: "bit", nullable: false),
                    Publicaosite = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventosSebraeLab", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DiasEventoSebraeLab",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    HoraInicio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HoraFim = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Option = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiasEventoSebraeLab", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiasEventoSebraeLab_EventosSebraeLab_Id",
                        column: x => x.Id,
                        principalTable: "EventosSebraeLab",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DiasEventoSebraeLab");

            migrationBuilder.DropTable(
                name: "EventosSebraeLab");
        }
    }
}
