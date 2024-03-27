using System;
using System.ComponentModel.DataAnnotations;

namespace vessel_gear_check_api.Models
{
    public class DefaultChecklist
    {
        [Key]
        public int Question_id { get; set; }
        [Required] 
        public string Checklist_name { get; set; }

        [Required]
        public string Department { get; set; }

        [Required]
        public string Checklist_catager { get; set; }

        [Required]
        public string Question { get; set; }

        [Required]
        public string Assigned_by { get; set; }

        [Required]
        public DateTime Assigned_date { get; set; }

        [Required]
        public string Answer { get; set; }

        [Required]
        public string Note { get; set; }

        [Range(0, 4)]
        public int Status { get; set; } = 0;



    }
}
