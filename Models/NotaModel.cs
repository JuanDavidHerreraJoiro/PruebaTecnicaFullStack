using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PruebaTecnicaFullStack.Models
{
    public class NotaInputModel
    {
        public double Nota1 { get; set; }
        public double Nota2 { get; set; }
        public double Nota3 { get; set; }

        [Required(ErrorMessage = "Se requiere el id del estudiante")]
        [ForeignKey("EstudianteViewModel")]
        public int EstudianteId { get; set; }

        [Required(ErrorMessage = "Se requiere el id del curso")]
        [ForeignKey("CursoViewModel")]
        public int CursoId { get; set; }
    }
    public class NotaViewModel: NotaInputModel
    {
        public NotaViewModel() { }
        public NotaViewModel(NotaInputModel nota) {
            Nota1=nota.Nota1;
            Nota2=nota.Nota2;
            Nota3=nota.Nota3;
            EstudianteId = nota.EstudianteId;
            CursoId = nota.CursoId;
        }

        public double NotaFinal { get; set; }
        public string? Aprobado { get; set; }
        public EstudianteViewModel? Estudiante { get; set; }
        public CursoViewModel? Curso { get; set; }
        
        [Key]
        public int Id { get; set; }
        
        public void CalcularNotaFinal()
        {
            NotaFinal = (this.Nota1 * 0.3) + (this.Nota2 * 0.3) + (this.Nota3 * 0.4);
        }
        
        public void CambioEstado()
        {
            if (this.Nota1 != 0 && this.Nota2 != 0 && this.Nota3 != 0)
            {
                if (NotaFinal>2.95)
                {
                    Aprobado = "APROBADO";
                }
                else
                {
                    Aprobado = "REPROBADO";
                }
            }
            else
            {
                Aprobado = "PENDIENTE";
            }
        }
    }
}
