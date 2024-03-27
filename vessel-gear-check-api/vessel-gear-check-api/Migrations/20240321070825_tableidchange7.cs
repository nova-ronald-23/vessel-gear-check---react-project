using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vessel_gear_check_api.Migrations
{
    /// <inheritdoc />
<<<<<<<< Updated upstream:vessel-gear-check-api/vessel-gear-check-api/Migrations/20240312191159_User_infomig.cs
    public partial class User_infomig : Migration
========
    public partial class tableidchange7 : Migration
>>>>>>>> Stashed changes:vessel-gear-check-api/vessel-gear-check-api/Migrations/20240321070825_tableidchange7.cs
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User_infos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    User_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: false),
                    Roll = table.Column<string>(type: "nvarchar(max)", nullable: false),
<<<<<<<< Updated upstream:vessel-gear-check-api/vessel-gear-check-api/Migrations/20240312191159_User_infomig.cs
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false)
========
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
>>>>>>>> Stashed changes:vessel-gear-check-api/vessel-gear-check-api/Migrations/20240321070825_tableidchange7.cs
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User_infos", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "User_infos");
        }
    }
}
