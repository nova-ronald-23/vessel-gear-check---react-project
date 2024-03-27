using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vessel_gear_check_api.Migrations.VesselProfileDb
{
    /// <inheritdoc />
    public partial class vesselprofile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VesselProfiles",
                columns: table => new
                {
                    IMO_number = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IMO_type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Captain_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name_of_chief_engineer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name_of_chief_mate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Vessel_id = table.Column<int>(type: "int", nullable: false),
                    Vessel_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Vessel_type_class = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Registry = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Maintenance_schedule = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Histroy = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VesselProfiles", x => x.IMO_number);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VesselProfiles");
        }
    }
}
