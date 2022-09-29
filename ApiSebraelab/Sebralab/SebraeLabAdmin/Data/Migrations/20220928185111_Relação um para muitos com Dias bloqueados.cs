using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class RelaçãoumparamuitoscomDiasbloqueados : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DiasBloqueioados");

            migrationBuilder.CreateTable(
                name: "DiasBloqueoados",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Bloqueadorid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime", nullable: false),
                    Datacadastro = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Horainicio = table.Column<string>(type: "varchar(5)", nullable: true),
                    Horafim = table.Column<string>(type: "varchar(5)", nullable: true),
                    Options = table.Column<string>(type: "varchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiasBloqueoados", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiasBloqueoados_Bloqueador_Bloqueadorid",
                        column: x => x.Bloqueadorid,
                        principalTable: "Bloqueador",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DiasBloqueoados_Bloqueadorid",
                table: "DiasBloqueoados",
                column: "Bloqueadorid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DiasBloqueoados");

            migrationBuilder.CreateTable(
                name: "DiasBloqueioados",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    BloqueiadorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime", nullable: false),
                    DataCadastro = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Horafim = table.Column<string>(type: "varchar(5)", nullable: true),
                    Horainicio = table.Column<string>(type: "varchar(5)", nullable: true),
                    Options = table.Column<string>(type: "varchar(100)", nullable: true)
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
    }
}
