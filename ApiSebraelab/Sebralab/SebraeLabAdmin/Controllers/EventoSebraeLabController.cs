using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SebraeLab.Bloqueio.App.Services;
using SebraeLab.Bloqueio.Domain;
using SebraeLab.Blqoueio.App.ViewModels;
using SebraeLab.Conteudo.App.ViewModels;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.App.ViewModels;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SebraeLabAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class EventoSebraeLabController : ControllerBase
    {
        private readonly IEventoSebraeLabAppService _serviceEventoSebraeLab;
        private readonly IBloqueadorAppService _serviceBloqueio;

        public EventoSebraeLabController(IEventoSebraeLabAppService service,
                                         IBloqueadorAppService serviceBloqueio  )
        {
            _serviceEventoSebraeLab = service;
            _serviceBloqueio = serviceBloqueio;
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

        [HttpGet("Pesquisar")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<EventoSebraeLabViewModel>>> Search([FromQuery] string value) =>
        await _serviceEventoSebraeLab.Search(value);

        [HttpGet("Alocacao")]
        [AllowAnonymous]
        public async Task<ActionResult<bool>> Shedulle([FromQuery] string Data, string horainicio, string horafinal) =>
        await _serviceEventoSebraeLab.Alocados( Data,  horainicio,  horafinal);


        private void verifyAvailable(EventoSebraeLabViewModel eventosebraelabViewModel, string id ="")
        {
            if (eventosebraelabViewModel != null)
            {
                eventosebraelabViewModel.Dias.ForEach(d =>
                {
                if (_serviceEventoSebraeLab.Alocados(d.Data?.ToString("yyyy/MM/dd"),
                                                     d.Horainicio,
                                                     d.Horafim, 
                                                     id).Result == true)
                                                   
                    {
                        throw new NotImplementedException($"Já existe EVENTO agendado para está data {d.Data?.ToString("dd/MM/yyyy")} - {d.Horainicio} - {d.Horafim} ");
                    }
                });
            }
        }
        // POST api/<EventoSebraeLabController>
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            try
            {
                verifyAvailable(eventosebraelabViewModel);

                await _serviceEventoSebraeLab.Add(eventosebraelabViewModel);
                return Ok(new { msg = "evento salvo com sucesso!" });
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
                verifyAvailable(eventosebraelabViewModel, id.ToString());

                await _serviceEventoSebraeLab.Update(eventosebraelabViewModel );
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

        [HttpGet]
        [Route("DiasBloqueados")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<DiaBloqueado>>> GetAllBloqueio() =>
           await _serviceBloqueio.GetAllDiasBloqueado();

        // POST api/<ValuesController>
        [HttpPost]
        [Route("DiasBloqueados")]
        [AllowAnonymous]
        public void Post(BloqueadorViewModel bloqueador)
        {
            _serviceBloqueio.Add( bloqueador );
        }

        [HttpPatch("Publicar/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Publish(Guid id)
        {
            try
            {
                await _serviceEventoSebraeLab.Publish(id);
                return Ok(new { msg = "evento publicado com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }

    }
}
