using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class Removernascimento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nascimento",
                table: "FeedbackUsuario");

            migrationBuilder.AlterColumn<string>(
                name: "IdEvento",
                table: "FeedbackUsuario",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Telefone",
                table: "FeedbackUsuario",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Telefone",
                table: "FeedbackUsuario");

            migrationBuilder.AlterColumn<Guid>(
                name: "IdEvento",
                table: "FeedbackUsuario",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Nascimento",
                table: "FeedbackUsuario",
                type: "nvarchar(1)",
                nullable: false,
                defaultValue: "");
        }
    }
}
