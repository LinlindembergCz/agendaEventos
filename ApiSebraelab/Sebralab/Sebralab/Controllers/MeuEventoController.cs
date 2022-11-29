using Microsoft.AspNetCore.Mvc;
using sebraelab.core.comunication;
using SebraeLab.Core.DomainObjects;

namespace Sebralab.Controllers
{
    [ApiController]
    [Route("api/meuevento")]
    public class MeuEventoController : ControllerBase
    {
        private ISenderEmail _service;
        public MeuEventoController( ISenderEmail service)
        {
           _service = service;
        }

        [HttpPost]
        public async Task<bool> SendEmailEvento(MessengerEntity command) => 
            await _service.SendEmailEvento(command);
    }
}