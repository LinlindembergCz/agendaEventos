using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class NovoscamposNewsletter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Aceitoreceber",
                table: "NewsLetter",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Aceitotermos",
                table: "NewsLetter",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cnpj",
                table: "NewsLetter",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Cpf",
                table: "NewsLetter",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Aceitoreceber",
                table: "NewsLetter");

            migrationBuilder.DropColumn(
                name: "Aceitotermos",
                table: "NewsLetter");

            migrationBuilder.DropColumn(
                name: "Cnpj",
                table: "NewsLetter");

            migrationBuilder.DropColumn(
                name: "Cpf",
                table: "NewsLetter");
        }
    }
}
