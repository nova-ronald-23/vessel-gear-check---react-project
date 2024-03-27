using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vessel_gear_check_api.Migrations.DefaultChecklistDb
{
    /// <inheritdoc />
    public partial class defaultchecklistchange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Checklist_name",
                table: "DefaultChecklists",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "DefaultChecklists",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Checklist_name",
                table: "DefaultChecklists");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "DefaultChecklists");
        }
    }
}
