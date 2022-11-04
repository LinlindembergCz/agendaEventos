using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SebraeLab.Evento.Data.Migrations
{
    public partial class NovatabelaFeedBackUsuario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FeedbackUsuario",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NomeUsuario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailUsuario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CPFUsuario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TipoVisita = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    Nascimento = table.Column<string>(type: "nvarchar(1)", nullable: false),
                    IdEvento = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FeedbackUsuario", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FeedbackUsuario");
        }
    }
}
