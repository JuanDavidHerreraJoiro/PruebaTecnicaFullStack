using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaFullStack.Data;
using PruebaTecnicaFullStack.Logic;
using PruebaTecnicaFullStack.Models;
using PruebaTecnicaFullStack.Services;

namespace PruebaTecnicaFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CursoController : ControllerBase
    {
        private CursoService cursoService;
        public CursoController(UniversidadDBContext context)
        {
            cursoService = new CursoService(context);
        }

        // GET: api/<CursoController>
        [HttpGet]
        public IEnumerable<CursoViewModel>? Get() => cursoService.ConsultarTodos();

        // POST api/<CursoController>
        [HttpPost]
        public ActionResult<CursoViewModel> Post(CursoInputModel curso)
        {
            var respuesta = cursoService.Guardar(curso);

            if (respuesta?.Error == true)
                return BadRequest(ErrorModelo.AgregarError(ModelState, respuesta?.Mensaje!));

            return Ok(respuesta?.Objeto);
        }
    }
}
