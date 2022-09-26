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
                    Numeroparticipantes = table.Column<int>(type: "int", nullable: true),
                    Tipoevento = table.Column<string>(type: "varchar(150)", nullable: false),
                    Linksparainscricao = table.Column<string>(type: "varchar(50)", nullable: true),
                    Descricaoevento = table.Column<string>(type: "varchar(2000)", nullable: false),
                    Nomecompleto = table.Column<string>(type: "varchar(50)", nullable: false),
                    Email = table.Column<string>(type: "varchar(50)", nullable: false),
                    Instituicao = table.Column<string>(type: "varchar(50)", nullable: true),
                    Contato = table.Column<string>(type: "varchar(20)", nullable: false),
                    Imagempersonalida = table.Column<bool>(type: "bit", nullable: true),
                    Publicaosite = table.Column<bool>(type: "bit", nullable: true)
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
                    Eventoid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Horainicio = table.Column<string>(type: "varchar(5)", nullable: false),
                    Horafim = table.Column<string>(type: "varchar(5)", nullable: false),
                    Option = table.Column<string>(type: "varchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiasEventoSebraeLab", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiasEventoSebraeLab_EventosSebraeLab_Eventoid",
                        column: x => x.Eventoid,
                        principalTable: "EventosSebraeLab",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DiasEventoSebraeLab_Eventoid",
                table: "DiasEventoSebraeLab",
                column: "Eventoid");
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
