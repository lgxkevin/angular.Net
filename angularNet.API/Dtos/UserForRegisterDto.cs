using System.ComponentModel.DataAnnotations;

namespace angularNet.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username{get;set;}
        [Required]
        [StringLength(8,MinimumLength = 4, ErrorMessage="Password must between 4 and 8 characters.")]
        public string Password{get;set;}
    }
}