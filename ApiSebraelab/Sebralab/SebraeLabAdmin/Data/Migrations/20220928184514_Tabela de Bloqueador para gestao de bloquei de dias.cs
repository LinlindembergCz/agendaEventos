using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class TabeladeBloqueadorparagestaodebloqueidedias : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BloqueioDias");

            migrationBuilder.CreateTable(
                name: "Bloqueador",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Motivo = table.Column<string>(type: "varchar(250)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bloqueador", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DiasBloqueioados",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime", nullable: false),
                    DataCadastro = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Horainicio = table.Column<string>(type: "varchar(5)", nullable: true),
                    Horafim = table.Column<string>(type: "varchar(5)", nullable: true),
                    Options = table.Column<string>(type: "varchar(100)", nullable: true),
                    BloqueiadorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiasBloqueioados", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiasBloqueioados_Bloqueador_BloqueiadorId",
                        column: x => x.BloqueiadorId,
                        principalTable: "Bloqueador",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DiasBloqueioados_BloqueiadorId",
                table: "DiasBloqueioados",
                column: "BloqueiadorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DiasBloqueioados");

            migrationBuilder.DropTable(
                name: "Bloqueador");

            migrationBuilder.CreateTable(
                name: "BloqueioDias",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime", nullable: false),
                    DataCadastro = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloqueioDias", x => x.Id);
                });
        }
    }
}
