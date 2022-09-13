using Microsoft.AspNetCore.Mvc;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.App.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SebraeLabAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventoSebraeLabController : ControllerBase
    {
        private readonly IEventoSebraeLabAppService _serviceEventoSebraeLab;

        public EventoSebraeLabController(IEventoSebraeLabAppService service)
        {
            _serviceEventoSebraeLab = service;
        }


        // GET: api/<EventoSebraeLabController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventoSebraeLabViewModel>>> Get() =>
           await _serviceEventoSebraeLab.GetAll();
     

        // GET api/<EventoSebraeLabController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EventoSebraeLabViewModel>> Get(Guid id)
        {
            return await _serviceEventoSebraeLab.GetById(id);
        }

        // POST api/<EventoSebraeLabController>
        [HttpPost]
        public  void Post([FromBody] EventoSebraeLabViewModel eventosebraelabViewModel)
        {         
             _serviceEventoSebraeLab.Add(eventosebraelabViewModel);

        }

        // PUT api/<EventoSebraeLabController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EventoSebraeLabController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
