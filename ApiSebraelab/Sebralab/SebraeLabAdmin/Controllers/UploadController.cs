using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.ComponentModel;
using System.IO;
using System.Threading.Tasks;

namespace SebraeLabAdmin.Controllers
{

    [ApiController]
    [AllowAnonymous]
    public class UploadController : ControllerBase
    {
        private string _uploadPath = "//STFSAON006326-L//temp";
        
        public UploadController() 
        {
        }

        [HttpPost]
        [Route("api/upload/image")]
        [AllowAnonymous]
        public virtual async Task<IActionResult> UploadImage()//([FromForm] IFormFile? image_file)
        {

            IFormFile image_file  = Request.Form.Files[0];


            if (image_file.Length > 0)
            {
                try
                {
                    if (!Directory.Exists(_uploadPath + "\\upload\\images\\"))
                    {
                        Directory.CreateDirectory(_uploadPath + "\\upload\\images\\");
                    }

                    var filename = image_file.FileName;

                    using (FileStream filestream = System.IO.File.Create(_uploadPath + "\\upload\\images\\" + filename))
                    {
                        await image_file.CopyToAsync(filestream);

                        filestream.Flush();

                        return Created("/upload/images/" + filename, new { Uri = "/upload/images/" + filename });
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.ToString());
                }
            }
            else
            {
                return BadRequest();
            }
        }        
    }
}
