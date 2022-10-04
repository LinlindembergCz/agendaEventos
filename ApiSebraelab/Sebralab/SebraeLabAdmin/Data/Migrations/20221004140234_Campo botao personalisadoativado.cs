using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class Campobotaopersonalisadoativado : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Personalizadodesativado",
                table: "ConteudosSebraeLab",
                newName: "Personalizadoativado");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "EventosSebraeLab",
                type: "nvarchar(1)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(10)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Descricaoevento",
                table: "EventosSebraeLab",
                type: "varchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(2000)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Personalizadoativado",
                table: "ConteudosSebraeLab",
                newName: "Personalizadodesativado");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "EventosSebraeLab",
                type: "varchar(10)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Descricaoevento",
                table: "EventosSebraeLab",
                type: "varchar(2000)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(max)");
        }
    }
}
