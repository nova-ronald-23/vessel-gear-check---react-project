using System.ComponentModel.DataAnnotations;

namespace vessel_gear_check_api.Models
{
    public class VesselProfile
    {
        [Key]
        public int IMO_number { get; set; }
        [Required]
        public string IMO_type {get; set;}
        [Required]
        public string Captain_name { get; set;}
        [Required]
        public string Name_of_chief_engineer { get; set;}
        [Required]
        public string Name_of_chief_mate { get; set;}

        [Required]
        public int Vessel_id {  get; set;}
        [Required]
        public string Vessel_name { get; set;}
        [Required]
        public string Vessel_type_class { get; set; }
        [Required]
        public string Country {  get; set;}
        [Required]
        public string Registry {  get; set;}
        [Required]
        public string Maintenance_schedule {  get; set;}
        [Required]
        public string Histroy {  get; set;}
        
    }
}
