using PruebaTecnicaFullStack.Data;
using PruebaTecnicaFullStack.Models;

namespace PruebaTecnicaFullStack.Logic
{
    public class CursoService
    {
        private readonly UniversidadDBContext _context;
        public CursoService(UniversidadDBContext context)
        {
            _context = context;
        }

        public IEnumerable<CursoViewModel>? ConsultarTodos() => _context.Cursos?.ToList();

        public CursoViewModel? ConsultarCursoXNombre(string Nombre) => _context.Cursos?.FirstOrDefault(c => c.Nombre == Nombre)!;

        public GuardarResponse<CursoViewModel> Guardar(CursoInputModel curso)
        {
            try
            {
                var cursoBuscado = ConsultarCursoXNombre(curso.Nombre!);

                if (cursoBuscado != null)
                {
                    return new GuardarResponse<CursoViewModel>($"El curso {curso.Nombre} ya se encuentra registrado");
                }

                var cursoView = new CursoViewModel(curso);
                _context.Cursos?.Add(cursoView);
                _context.SaveChanges();

                return new GuardarResponse<CursoViewModel>(cursoView);

            }
            catch (System.Exception)
            {
                return new GuardarResponse<CursoViewModel>("Error en la base de datos. ");
            }
        }
    }
}
