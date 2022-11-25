using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SebraeLab.Bloqueio.App.Services;
using SebraeLab.Bloqueio.Domain;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Core.Exceptions;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SebraeLab.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class EventoSebraeLabController : ControllerBase
    {
        private readonly IEventoSebraeLabAppService _serviceEventoSebraeLab;
        private readonly IBloqueadorAppService _serviceBloqueio;

        public EventoSebraeLabController(IEventoSebraeLabAppService service,
                                         IBloqueadorAppService serviceBloqueio)
        {
            _serviceEventoSebraeLab = service;
            _serviceBloqueio = serviceBloqueio;
        }

        // GET: api/<EventoSebraeLabController>
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<EventoSebraeLabViewModel>>> Get() 
        {
            try
            {
               return await _serviceEventoSebraeLab.GetAll(true);
            }
            catch (DBConnectException e)
            {
                Response.StatusCode = 503;
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }

        // GET api/<EventoSebraeLabController>/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<EventoSebraeLabViewModel>> Get(Guid id)
        {
            try
            {
                return await _serviceEventoSebraeLab.GetById(id);
            }
            catch (DBConnectException e)
            {
                Response.StatusCode = 503;
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }

        [HttpGet("Pesquisar")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<EventoSebraeLabViewModel>>> Search([FromQuery] string value)
        { 
            try
            {
                return await _serviceEventoSebraeLab.Search(value, true);
            }
            catch (DBConnectException e)
            {
                Response.StatusCode = 503;
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
                        catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }

        [HttpGet]
        [Route("DiasBloqueados")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<DiaBloqueado>>> GetAllBloqueio() =>
          await _serviceBloqueio.GetAllDiasBloqueado();

        [HttpGet("Disponivel")]
        [AllowAnonymous]
        public async Task<ActionResult<bool>> Available([FromQuery] string Data, string horainicio, string horafinal) =>
        await _serviceEventoSebraeLab.Available(Data, horainicio, horafinal);

        // POST api/<EventoSebraeLabController>
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            try
            {
                await _serviceEventoSebraeLab.Add(eventosebraelabViewModel);
                return Ok(new { msg = "evento salvo com sucesso!" });
            }
            catch (DBConnectException e)
            {
                Response.StatusCode = 503;
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }

        }


    }
}
