using Microsoft.EntityFrameworkCore;
using PruebaTecnicaFullStack.Models;

namespace PruebaTecnicaFullStack.Data
{
    public class UniversidadDBContext:DbContext
    {
        public UniversidadDBContext()
        {

        }
        public UniversidadDBContext(DbContextOptions<UniversidadDBContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localHost\\SQLEXPRESS; Database=UniversidadDB; Trusted_Connection=True; MultipleActiveResultSets=True");
        }

        public DbSet<EstudianteViewModel>? Estudiantes { get; set; }

        public DbSet<CursoViewModel>? Cursos { get; set; }

        public DbSet<NotaViewModel>? Notas { get; set; }
    }
}
