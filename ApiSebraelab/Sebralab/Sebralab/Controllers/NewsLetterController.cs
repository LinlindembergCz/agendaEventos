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







    }
}
