using System;
using System.ComponentModel.DataAnnotations;

namespace vessel_gear_check_api.Models
{
    public class Checklist
    {
        [Key]
        public int Question_id { get; set; }

        [Required]
        public string Checklist_name { get; set; }

        [Required]
        public string Checklist_type { get; set; }

        [Required]
        public string Department { get; set; }

        [Required]
        public string Question { get; set; }

        [Required]
        public string Assigned_by { get; set; }

        [Required]
        public DateTime Assigned_date { get; set; }

        [Required]
        public string Answer1 { get; set; }

        [Required]
        public string Answer2 { get; set; }

        [Required]
        public string Answer3 { get; set; }

        [Required]
        public string Note { get; set; }

        public StatusType Status { get; set; }
    }

    public enum StatusType
    {
        Pending = 0,
        InProgress = 1,
        Completed = 2,
        Overdue = 3
    }

}