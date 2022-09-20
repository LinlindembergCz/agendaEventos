using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.App.ViewModels;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SebraeLabAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class EventoSebraeLabController : ControllerBase
    {
        private readonly IEventoSebraeLabAppService _serviceEventoSebraeLab;

        public EventoSebraeLabController(IEventoSebraeLabAppService service)
        {
            _serviceEventoSebraeLab = service;
        }

        // GET: api/<EventoSebraeLabController>
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<EventoSebraeLabViewModel>>> Get() =>
           await _serviceEventoSebraeLab.GetAll();
     

        // GET api/<EventoSebraeLabController>/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<EventoSebraeLabViewModel>> Get(Guid id)
        {
            return await _serviceEventoSebraeLab.GetById(id);
        }

        // POST api/<EventoSebraeLabController>
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            try
            {
                await _serviceEventoSebraeLab.Add(eventosebraelabViewModel);
                return Ok(new { msg = "eventsalvo com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
 
        }

        // PUT api/<EventoSebraeLabController>/5
        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Put(Guid id, EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            try
            {
                await _serviceEventoSebraeLab.Update(eventosebraelabViewModel);
                return Ok(new { msg = "evento alterado com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }

        // DELETE api/<EventoSebraeLabController>/5

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public void Delete(Guid id)
        {
        }

        // PATCH api/<EventoSebraeLabController>/5
      /*  [HttpPatch("Bloquear/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Bloquear(Guid id)
        {
            try
            {
                await _serviceEventoSebraeLab.Bloquear(id);
                return Ok(new { msg = "evento alterado com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }*/
    }
}
