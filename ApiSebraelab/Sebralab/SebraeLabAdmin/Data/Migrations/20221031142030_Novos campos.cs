using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class Novoscampos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "NewsLetter",
                type: "varchar(50)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(250)");

            migrationBuilder.AlterColumn<string>(
                name: "Cpf",
                table: "NewsLetter",
                type: "varchar(15)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Cnpj",
                table: "NewsLetter",
                type: "varchar(20)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Sobrenome",
                table: "NewsLetter",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Telefone",
                table: "NewsLetter",
                type: "varchar(20)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sobrenome",
                table: "NewsLetter");

            migrationBuilder.DropColumn(
                name: "Telefone",
                table: "NewsLetter");

            migrationBuilder.AlterColumn<string>(
                name: "Nome",
                table: "NewsLetter",
                type: "varchar(250)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50)");

            migrationBuilder.AlterColumn<string>(
                name: "Cpf",
                table: "NewsLetter",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(15)");

            migrationBuilder.AlterColumn<string>(
                name: "Cnpj",
                table: "NewsLetter",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(20)",
                oldNullable: true);
        }
    }
}
