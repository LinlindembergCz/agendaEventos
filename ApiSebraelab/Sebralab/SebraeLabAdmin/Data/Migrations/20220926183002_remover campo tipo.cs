using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class removercampotipo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tipopublicacao",
                table: "ConteudosSebraeLab");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Tipopublicacao",
                table: "ConteudosSebraeLab",
                type: "nvarchar(1)",
                nullable: false,
                defaultValue: "");
        }
    }
}
