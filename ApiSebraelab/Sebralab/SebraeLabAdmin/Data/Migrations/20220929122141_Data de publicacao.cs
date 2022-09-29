using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class Datadepublicacao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DataCadastro",
                table: "ConteudosSebraeLab",
                newName: "Datacadastro");

            migrationBuilder.AddColumn<DateTime>(
                name: "Datapublicacao",
                table: "ConteudosSebraeLab",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Datapublicacao",
                table: "ConteudosSebraeLab");

            migrationBuilder.RenameColumn(
                name: "Datacadastro",
                table: "ConteudosSebraeLab",
                newName: "DataCadastro");
        }
    }
}
