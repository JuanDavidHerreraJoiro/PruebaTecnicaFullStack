using System.ComponentModel.DataAnnotations;

namespace PruebaTecnicaFullStack.Models
{
    public class CursoInputModel
    {
        [Required(ErrorMessage = "Se requiere el nombre")]
        public string? Nombre { get; set; }

        [Required(ErrorMessage = "Se requiere la cantidad de creditos")]
        public int? Creditos { get; set; }
    }
    public class CursoViewModel: CursoInputModel
    {
        public CursoViewModel() { }
        public CursoViewModel(CursoInputModel curso)
        {
            Nombre = curso.Nombre!.ToUpper();
            Creditos = curso.Creditos;
        }

        [Key]
        public int Id { get; set; }
    }
}
