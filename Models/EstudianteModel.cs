using System.ComponentModel.DataAnnotations;

namespace PruebaTecnicaFullStack.Models
{
    public class EstudianteInputModel
    {
        [Required(ErrorMessage = "La identificación es requerida")]
        public string? Identificacion { get; set; }
        [Required(ErrorMessage = "El tipo de identificacion es requerida")]
        public string? TipoIdentificacion { get; set; }
        [Required(ErrorMessage = "El nombre es requerido")]
        public string? Nombres { get; set; }

        [Required(ErrorMessage = "El apellido es requerido")]
        public string? Apellidos { get; set; }

        [Required(ErrorMessage = "El correo es requerido")]
        public string? Correo { get; set; }
        [Required(ErrorMessage = "El telefono es requerido")]
        public string? Telefono { get; set; }
        [Required(ErrorMessage = "La direccion es requerida")]
        public string? Direccion { get; set; }
    }
    public class EstudianteViewModel : EstudianteInputModel
    {
        public EstudianteViewModel() { }

        public EstudianteViewModel(EstudianteInputModel estudiante)
        {
            Identificacion=estudiante.Identificacion;
            TipoIdentificacion=estudiante?.TipoIdentificacion;
            Nombres = estudiante?.Nombres!.ToUpper();
            Apellidos = estudiante?.Apellidos!.ToUpper();
            Correo = estudiante?.Correo;
            Telefono = estudiante?.Telefono;
            Direccion = estudiante?.Direccion!.ToUpper();
        }

        [Key]
        public int Id { get; set; }
    }
}
