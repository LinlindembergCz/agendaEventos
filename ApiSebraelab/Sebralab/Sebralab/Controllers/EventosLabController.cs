using Microsoft.AspNetCore.Mvc;
using sebraelab.core.comunication;
using SebraeLab.Core.DomainObjects;

namespace Sebralab.Controllers
{
    [ApiController]
    [Route("eventoslab")]
    public class EventosLabController : ControllerBase
    {
        private readonly ILogger<EventosLabController> _logger;
        private ISenderEmail _service;

        public EventosLabController(ILogger<EventosLabController> logger
            , ISenderEmail service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpPost]
        public async Task<bool> SendSugestion(MessengerEntity command) => await _service.SendMail(command);
    }
}