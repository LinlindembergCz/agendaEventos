using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Sebraelab.Usuario.Domain;
using SebraeLab.Evento.Data;

namespace SebraeLabAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[EnableCors("AnotherPolicy")]
    [AllowAnonymous]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext _conntext;
        public UsuarioController(ApplicationDbContext conntext  )
        {
           _conntext = conntext;
        }

        [HttpPost]
        [AllowAnonymous]
        //[EnableCors("AnotherPolicy")]
        public async Task<IActionResult> Post(Usuario usuario)
        {
            try
            {
                if (_conntext.Usuarios.Where(u => u.Login == usuario.Login &&
                                             u.Senha == usuario.Senha).ToList().Count > 0)
                    return Ok(new { msg = "usuario encontrado" });
                else
                {
                    Response.StatusCode = 401; // Não autorizado
                    return new ObjectResult("Não autorizado");
                }                
               
            }
            catch (Exception e)
            {
                return new ObjectResult("Falhou! Mensagem: " + e.Message);
            }
        }
    }
}
