using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vessel_gear_check_api.Migrations.DefaultChecklistDb
{
    /// <inheritdoc />
    public partial class tablechanged : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "DefaultChecklists");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "DefaultChecklists",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
