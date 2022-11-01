using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class Tabeladenewsletter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DiasBloqueados_Bloqueador_Bloqueadorid",
                table: "DiasBloqueados");

            migrationBuilder.AlterColumn<Guid>(
                name: "Bloqueadorid",
                table: "DiasBloqueados",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.CreateTable(
                name: "NewsLetter",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "varchar(250)", nullable: false),
                    Email = table.Column<string>(type: "varchar(250)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsLetter", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_DiasBloqueados_Bloqueador_Bloqueadorid",
                table: "DiasBloqueados",
                column: "Bloqueadorid",
                principalTable: "Bloqueador",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DiasBloqueados_Bloqueador_Bloqueadorid",
                table: "DiasBloqueados");

            migrationBuilder.DropTable(
                name: "NewsLetter");

            migrationBuilder.AlterColumn<Guid>(
                name: "Bloqueadorid",
                table: "DiasBloqueados",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_DiasBloqueados_Bloqueador_Bloqueadorid",
                table: "DiasBloqueados",
                column: "Bloqueadorid",
                principalTable: "Bloqueador",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
