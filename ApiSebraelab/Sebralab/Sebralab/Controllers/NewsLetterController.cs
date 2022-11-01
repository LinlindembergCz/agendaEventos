using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SebraeLab.NewsLetter.App.Services;
using SebraeLab.NewsLetter.App.ViewModels;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SebraeLabAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class NewsLetterController : ControllerBase
    {
        private readonly INewsLetterAppService _serviceNewsLetter;
        public NewsLetterController(INewsLetterAppService service )
        {
            _serviceNewsLetter = service;
        }

        // GET: api/<EventoSebraeLabController>
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<NewsLetterViewModel>>> Get() =>
           await _serviceNewsLetter.GetAll();
     

        // GET api/<EventoSebraeLabController>/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<NewsLetterViewModel>> Get(Guid id)
        {
            return await _serviceNewsLetter.GetById(id);
        }

   
       // POST api/<EventoSebraeLabController>
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post(NewsLetterViewModel newsLetterViewModel)
        {
            try
            {
                await _serviceNewsLetter.Add(newsLetterViewModel);
                return Ok(new { msg = "newsletter salvo com sucesso!" });
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
 
        }

        // PUT api/<EventoSebraeLabController>/5
        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Put(Guid id, NewsLetterViewModel newsLetterViewModel)
        {
            try
            {         
               await _serviceNewsLetter.Update(newsLetterViewModel);
                return Ok(new { msg = "newsletter alterado com sucesso!" });
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



    }
}
