using Microsoft.AspNetCore.Mvc;
using sebraelab.core.comunication;
using SebraeLab.Core.DomainObjects;

namespace Sebralab.Controllers
{
    [ApiController]
    [Route("meuevento")]
    public class MeuEventoController : ControllerBase
    {
        private readonly ILogger<MeuEventoController> _logger;
        private IFileTransfer _service;

        public MeuEventoController(ILogger<MeuEventoController> logger
            , IFileTransfer service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpPost]
        public async Task<bool> SendSugestion(MessengerEntity command) => await _service.SendMail(command);
    }
}