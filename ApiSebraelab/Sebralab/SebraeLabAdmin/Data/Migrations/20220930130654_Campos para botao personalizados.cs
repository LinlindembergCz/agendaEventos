using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class Camposparabotaopersonalizados : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Linkredirecionamento",
                table: "ConteudosSebraeLab",
                type: "varchar(300)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Titulobotao",
                table: "ConteudosSebraeLab",
                type: "varchar(20)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Titulochamada",
                table: "ConteudosSebraeLab",
                type: "varchar(150)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Linkredirecionamento",
                table: "ConteudosSebraeLab");

            migrationBuilder.DropColumn(
                name: "Titulobotao",
                table: "ConteudosSebraeLab");

            migrationBuilder.DropColumn(
                name: "Titulochamada",
                table: "ConteudosSebraeLab");
        }
    }
}
