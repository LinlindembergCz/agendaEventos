using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class CampoTipodepublicacao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "ConteudosSebraeLab",
                type: "nvarchar(1)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Tipo",
                table: "ConteudosSebraeLab",
                type: "nvarchar(1)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataCadastro",
                table: "BloqueioDias",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tipo",
                table: "ConteudosSebraeLab");

            migrationBuilder.DropColumn(
                name: "DataCadastro",
                table: "BloqueioDias");

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "ConteudosSebraeLab",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1)");
        }
    }
}
