using Microsoft.AspNetCore.Mvc;
using sebraelab.core.comunication;
using SebraeLab.Core.DomainObjects;

namespace Sebralab.Controllers
{
    [ApiController]
    [Route("conteudo")]
    public class ConteudoController : ControllerBase
    {
        private readonly ILogger<ConteudoController> _logger;
        private ISenderEmail _service;

        public ConteudoController(ILogger<ConteudoController> logger
            , ISenderEmail service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpPost]
        public async Task<bool> SendSugestion(MessengerEntity command) => await _service.SendMail(command);
    }
}