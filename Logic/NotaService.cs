using Microsoft.EntityFrameworkCore;
using PruebaTecnicaFullStack.Data;
using PruebaTecnicaFullStack.Models;

namespace PruebaTecnicaFullStack.Logic
{
    public class NotaService
    {
        private readonly UniversidadDBContext _context;
        public NotaService(UniversidadDBContext context)
        {
            _context = context;
        }
        
        public IEnumerable<NotaViewModel>? ConsultarTodos() => _context.Notas?
            .Include("Estudiante")
            .Include("Curso")
            .ToList();

        public NotaViewModel? ConsultarNotaXId(int IdEstudiante, int IdCurso) => _context.Notas?
            .Where(c => c.EstudianteId == IdEstudiante && c.CursoId == IdCurso)
            .Include("Estudiante")
            .Include("Curso")
            .FirstOrDefault();

        public IEnumerable<NotaViewModel>? ConsultarNotaXIdEstudiante(string IdEstudiante) => _context.Notas?
            .Where(c => c.Estudiante!.Identificacion == IdEstudiante)
            .Include("Estudiante")
            .Include("Curso")
            .ToList();

        public IEnumerable<NotaViewModel>? ConsultarNotaXIdCurso(int IdCurso) => _context.Notas?
            .Where(c => c.CursoId == IdCurso)
            .Include("Estudiante")
            .Include("Curso")
            .ToList();

        public GuardarResponse<NotaViewModel> Guardar(NotaInputModel nota)
        {
            try
            {
                var notaBuscado = ConsultarNotaXId(nota.EstudianteId!, nota.CursoId);

                if (notaBuscado != null)
                {
                    return new GuardarResponse<NotaViewModel>($"El estudiante ya tiene nota registrada en el curso");
                }

                var notaView = new NotaViewModel(nota);
                notaView.CalcularNotaFinal();
                notaView.CambioEstado();

                _context.Notas?.Add(notaView);
                _context.SaveChanges();

                return new GuardarResponse<NotaViewModel>(notaView);
            }
            catch (System.Exception)
            {
                return new GuardarResponse<NotaViewModel>("Error en la base de datos. ");
            }
        }
        
        public GuardarResponse<NotaViewModel> Actualizar(NotaInputModel notaNueva)
        {
            try
            {
                var notaVieja = ConsultarNotaXId(notaNueva.EstudianteId!, notaNueva.CursoId);
                Console.WriteLine(notaVieja!.ToString());
                if (notaVieja != null)
                {
                    notaVieja.Nota1 = notaNueva.Nota1;
                    notaVieja.Nota2 = notaNueva.Nota2;
                    notaVieja.Nota3 = notaNueva.Nota3;
                    notaVieja.EstudianteId = notaNueva.EstudianteId;
                    notaVieja.CursoId = notaNueva.CursoId;
                    
                    notaVieja.CalcularNotaFinal();
                    notaVieja.CambioEstado();

                    _context.Notas?.Update(notaVieja);
                    _context.SaveChanges();

                    return new GuardarResponse<NotaViewModel>(notaVieja); 
                }
                return new GuardarResponse<NotaViewModel>($"El estudiante ya tiene nota registrada en el curso");
            }
            catch (System.Exception)
            {
                return new GuardarResponse<NotaViewModel>("Error en la base de datos. ");
            }
        }
    }
}
