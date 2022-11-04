using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Toten.App.Services;
using SebraeLab.Toten.App.ViewModels;

namespace SebraeLabToten.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class TotenControllers : ControllerBase
    {
        private readonly IEventoSebraeLabAppService _serviceEventoSebraeLab;
        private readonly IFeedbackUsuarioService _serviceFeedbackUsuario;

        public TotenControllers
            (IEventoSebraeLabAppService service,
             IFeedbackUsuarioService serviceFeedbackUsuario)
        {
            _serviceEventoSebraeLab = service;
            _serviceFeedbackUsuario = serviceFeedbackUsuario;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<EventoSebraeLabViewModel>>> Get() =>
           await _serviceEventoSebraeLab.GetAll(true);

        // POST api/<EventoSebraeLabController>
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post(FeedbackUsuarioViewModel feedbackUsuarioViewModel)
        {
            try
            {
                await _serviceFeedbackUsuario.Add(feedbackUsuarioViewModel);
                return Ok(new { msg = "Feedback salvo com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }
    }
}
