using Microsoft.AspNetCore.Mvc;
using sebraelab.core.comunication;
using SebraeLab.Core.Configuration;
using SebraeLab.Core.Configuration.Info;
using SebraeLab.Core.DomainObjects;

namespace Sebralab.Controllers
{
    [ApiController]
    [Route("api/meuevento")]
    public class MeuEventoController : ControllerBase
    {
        private ISenderEmail _service;
        public readonly IAppConfig _configuration;
        public MeuEventoController( ISenderEmail service,
            IAppConfig configuration)
        {
           _service = service;
            _configuration = configuration;
        }

        [HttpPost("agendar")]
        public async Task<bool> SendEmailEvento(MessengerEntity command) => 
            await _service.SendEmailEvento(command);

        [HttpPost("faleconosco")]
        public async Task<bool> SendEmailContato(MessengerEntity command) =>
           await _service.SendEmailContato(command);
        
        [HttpGet("info")]
        public  IInfoConfig GetInfo() =>  _configuration.Info;




          
    }
}