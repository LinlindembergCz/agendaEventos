using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SebraeLabAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BloqueadorController : ControllerBase
    {
        private readonly IEventoSebraeLabAppService _serviceEventoSebraeLab;
        public BloqueadorController(IEventoSebraeLabAppService service)
        {
            _serviceEventoSebraeLab = service;
        }


    
    }
}
