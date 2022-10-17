using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SebraeLab.Conteudo.App.Services;
using SebraeLab.Conteudo.App.ViewModels;
using SebraeLab.Conteudo.Domain.Enums;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SebraeLab.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class ConteudoSebraeLabController : ControllerBase
    {
        private readonly IConteudoSebraeLabAppService _serviceConteudoSebraeLab;

        public ConteudoSebraeLabController(IConteudoSebraeLabAppService service)
        {
            _serviceConteudoSebraeLab = service;
        }

        // GET: api/<EventoSebraeLabController>
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ConteudoSebraeLabViewModel>>> Get() =>
           await _serviceConteudoSebraeLab.GetAll(true);

        // GET api/<EventoSebraeLabController>/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ConteudoSebraeLabViewModel>> Get(Guid id)
        {
            return await _serviceConteudoSebraeLab.GetById(id);
        }

        // GET api/<EventoSebraeLabController>/5
        [HttpGet("PesquisarPorTipo/{tipo}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ConteudoSebraeLabViewModel>>> GetByTipo(TipoPublicacao tipo)
        {
            return await _serviceConteudoSebraeLab.GetByTipo(tipo, true);
        }

        [HttpGet("Pesquisar")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ConteudoSebraeLabViewModel>>> Search([FromQuery] string value) =>
           await _serviceConteudoSebraeLab.Search(value, true);



    }
}
