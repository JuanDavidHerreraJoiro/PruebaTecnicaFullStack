using PruebaTecnicaFullStack.Data;
using PruebaTecnicaFullStack.Models;

namespace PruebaTecnicaFullStack.Logic
{
    public class EstudianteService
    {
        private readonly UniversidadDBContext _context;
        public EstudianteService(UniversidadDBContext context)
        {
            _context = context;
        }

        public IEnumerable<EstudianteViewModel>? ConsultarTodos() => _context.Estudiantes?.ToList();

        public EstudianteViewModel? ConsultarEstudianteXId(string Identificacion) => _context.Estudiantes?.FirstOrDefault(c => c.Identificacion == Identificacion)!;

        public GuardarResponse<EstudianteViewModel> Guardar(EstudianteInputModel estudiante)
        {
            try
            {
                var estudianteBuscado = ConsultarEstudianteXId(estudiante.Identificacion!);

                if (estudianteBuscado != null)
                {
                    return new GuardarResponse<EstudianteViewModel>($"El estudiante {estudiante.Identificacion} ya se encuentra registrado");
                }

                var estudianteView = new EstudianteViewModel(estudiante);
                _context.Estudiantes?.Add(estudianteView);
                _context.SaveChanges();

                return new GuardarResponse<EstudianteViewModel>(estudianteView);

            }
            catch (System.Exception)
            {
                return new GuardarResponse<EstudianteViewModel>("Error en la base de datos. ");
            }
        }
    }
}
