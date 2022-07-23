using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaFullStack.Data;
using PruebaTecnicaFullStack.Logic;
using PruebaTecnicaFullStack.Models;
using PruebaTecnicaFullStack.Services;

namespace PruebaTecnicaFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotaController : ControllerBase
    {
        private NotaService notaService;
        public NotaController(UniversidadDBContext context)
        {
            notaService = new NotaService(context);
        }

        // GET: api/<NotaController>
        [HttpGet]
        public IEnumerable<NotaViewModel>? Get() => notaService.ConsultarTodos();

        // GET api/<NotaController>/1
        [HttpGet("IdEstudiante/{IdEstudiante}")]
        public IEnumerable<NotaViewModel>? GetNotaXIdEstudiante(string IdEstudiante) => notaService.ConsultarNotaXIdEstudiante(IdEstudiante);

        // GET api/<NotaController>/1
        [HttpGet("IdCurso/{IdCurso}")]
        public IEnumerable<NotaViewModel>? GetNotaXIdCurso(int IdCurso) => notaService.ConsultarNotaXIdCurso(IdCurso);

        // POST api/<NotaController>
        [HttpPost]
        public ActionResult<NotaViewModel> Post(NotaInputModel nota)
        {
            var respuesta = notaService.Guardar(nota);

            if (respuesta?.Error == true)
                return BadRequest(ErrorModelo.AgregarError(ModelState, respuesta?.Mensaje!));

            return Ok(respuesta?.Objeto);
        }

        // PUT api/<NotaController>/ActualizarNota
        [HttpPut]
        public ActionResult<NotaViewModel> ActualizarNota(NotaInputModel nota)
        {
            var respuesta = notaService.Actualizar(nota);

            if (respuesta?.Error == true)
                return BadRequest(ErrorModelo.AgregarError(ModelState, respuesta?.Mensaje!));

            return Ok(respuesta?.Objeto);
        }
    }
}
