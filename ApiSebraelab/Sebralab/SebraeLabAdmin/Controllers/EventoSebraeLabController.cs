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
        public void Post(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            _serviceEventoSebraeLab.Add(eventosebraelabViewModel);          

        }

        // PUT api/<EventoSebraeLabController>/5
        [HttpPut("{id}")]
        [AllowAnonymous]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EventoSebraeLabController>/5
        [HttpDelete("{id}")]
        [AllowAnonymous]
        public void Delete(int id)
        {
        }
    }
}
