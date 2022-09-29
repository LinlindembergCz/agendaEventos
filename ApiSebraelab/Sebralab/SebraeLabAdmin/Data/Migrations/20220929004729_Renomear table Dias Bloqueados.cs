using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class RenomeartableDiasBloqueados : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DiasBloqueoados");

            migrationBuilder.RenameColumn(
                name: "DataCadastro",
                table: "EventosSebraeLab",
                newName: "Datacadastro");

            migrationBuilder.AddColumn<DateTime>(
                name: "Datacadastro",
                table: "Bloqueador",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "DiasBloqueados",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Bloqueadorid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime", nullable: false),
                    Horainicio = table.Column<string>(type: "varchar(5)", nullable: true),
                    Horafim = table.Column<string>(type: "varchar(5)", nullable: true),
                    Options = table.Column<string>(type: "varchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiasBloqueados", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiasBloqueados_Bloqueador_Bloqueadorid",
                        column: x => x.Bloqueadorid,
                        principalTable: "Bloqueador",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DiasBloqueados_Bloqueadorid",
                table: "DiasBloqueados",
                column: "Bloqueadorid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DiasBloqueados");

            migrationBuilder.DropColumn(
                name: "Datacadastro",
                table: "Bloqueador");

            migrationBuilder.RenameColumn(
                name: "Datacadastro",
                table: "EventosSebraeLab",
                newName: "DataCadastro");

            migrationBuilder.CreateTable(
                name: "DiasBloqueoados",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Bloqueadorid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime", nullable: false),
                    Datacadastro = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Horafim = table.Column<string>(type: "varchar(5)", nullable: true),
                    Horainicio = table.Column<string>(type: "varchar(5)", nullable: true),
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
    }
}
