using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaFullStack.Data;
using PruebaTecnicaFullStack.Logic;
using PruebaTecnicaFullStack.Models;
using PruebaTecnicaFullStack.Services;

namespace PruebaTecnicaFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudianteController: ControllerBase
    {
        private EstudianteService estudianteService;
        public EstudianteController(UniversidadDBContext context)
        {
            estudianteService = new EstudianteService(context);
        }

        // GET: api/<EstudianteController>
        [HttpGet]
        public IEnumerable<EstudianteViewModel>? Get() => estudianteService.ConsultarTodos();

        // POST api/<EstudianteController>
        [HttpPost]
        public ActionResult<EstudianteViewModel> Post(EstudianteInputModel estudiante)
        {
            var respuesta = estudianteService.Guardar(estudiante);

            if (respuesta?.Error == true)
                return BadRequest(ErrorModelo.AgregarError(ModelState, respuesta?.Mensaje!));

            return Ok(respuesta?.Objeto);
        }
    }
}
