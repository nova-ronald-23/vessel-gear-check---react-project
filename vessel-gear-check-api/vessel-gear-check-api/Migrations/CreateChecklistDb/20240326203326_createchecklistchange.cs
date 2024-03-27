using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vessel_gear_check_api.Migrations.CreateChecklistDb
{
    /// <inheritdoc />
    public partial class createchecklistchange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CreateChecklists",
                columns: table => new
                {
                    Question_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Department = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Section = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Checklist_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Assigned_by = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Assigned_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Answer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CreateChecklists", x => x.Question_id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CreateChecklists");
        }
    }
}
