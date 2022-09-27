using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SebraeLab.Conteudo.App.Services;
using SebraeLab.Conteudo.App.ViewModels;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SebraeLabAdmin.Controllers
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
           await _serviceConteudoSebraeLab.GetAll();
     

        // GET api/<EventoSebraeLabController>/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ConteudoSebraeLabViewModel>> Get(Guid id)
        {
            return await _serviceConteudoSebraeLab.GetById(id);
        }

        // POST api/<EventoSebraeLabController>
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post(ConteudoSebraeLabViewModel conteudosebraelabViewModel)
        {
            try
            {
                await _serviceConteudoSebraeLab.Add(conteudosebraelabViewModel);
                return Ok(new { msg = "conteúdo salvo com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
 
        }

        // PUT api/<EventoSebraeLabController>/5
        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Put(Guid id, ConteudoSebraeLabViewModel conteudosebraelabViewModel)
        {
            try
            {
                await _serviceConteudoSebraeLab.Update(conteudosebraelabViewModel);
                return Ok(new { msg = "conteúdo alterado com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }

        // DELETE api/<EventoSebraeLabController>/5

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                await _serviceConteudoSebraeLab.Remove(id);
                return Ok(new { msg = "conteúdo excluido com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }

        // PATCH api/<EventoSebraeLabController>/5
      /*  [HttpPatch("Bloquear/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Bloquear(Guid id)
        {
            try
            {
                await _serviceEventoSebraeLab.Bloquear(id);
                return Ok(new { msg = "evento alterado com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }*/
    }
}
