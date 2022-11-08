using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using System.IO;
using Microsoft.Extensions.Configuration;
using SebraeLab.Evento.Data;

namespace SebraeLabAdmin.Controllers
{

    [ApiController]
    [AllowAnonymous]
    public class FileTransferController : ControllerBase
    {
        private string _Path = "";////STFSAON006326-L//temp
        public FileTransferController(IConfiguration configuration)
        {
            this._Path = configuration.GetValue<String>("PathTransfer");
        }

        private void DeleteExists(string directoryfilename)
        {
            if (System.IO.File.Exists(directoryfilename) )
            {
                System.IO.File.Delete(directoryfilename);
            }
        }

    [HttpPost]
        [Route("api/upload/image/{origem}")]//conteudo ou evento
        [AllowAnonymous]
        public virtual async Task<IActionResult> UploadImage(string origem)
        {
            IFormFile image_file  = Request.Form.Files[0];

            if (image_file.Length > 0)
            {
                try
                {
                    var directoryOrigem = $"\\upload\\images\\{origem}\\";
                    var directoryDestino = $"/upload/images/{origem}/";

                    if (!Directory.Exists(_Path + directoryOrigem ))
                    {
                        Directory.CreateDirectory(_Path + directoryOrigem );
                    }       

                    FileInfo fileInfo = new FileInfo(image_file.FileName);

                    var filename = image_file.Name + fileInfo.Extension;

                    //var filenameOnly = image_file.Name.Substring(0, image_file.Name.IndexOf(".") - 1);

                    //DeleteExists(_Path + directoryDestino + filenameOnly + ".png");
                    //DeleteExists(_Path + directoryDestino + filenameOnly + ".jpg");

                    DeleteExists(_Path + directoryDestino + image_file.Name + ".png");
                    DeleteExists(_Path + directoryDestino + image_file.Name + ".jpg");                   

                    using (FileStream filestream = System.IO.File.Create(_Path + directoryOrigem + filename))
                    {
                        await image_file.CopyToAsync(filestream);

                        filestream.Flush();

                        return Created(directoryDestino + filename, new { Uri = directoryDestino + filename });
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

        private string GetContentType(string path)
        {
            var provider = new FileExtensionContentTypeProvider();
            string contentType;

            if (!provider.TryGetContentType(path, out contentType))
            {
                contentType = "application/octet-stream";
            }

            return contentType;
        }

        [HttpGet]
        [Route("api/download/image/{origem}")]//conteudo ou evento
        public async Task<IActionResult> Download(string origem , [FromQuery] string fileUrl)
        {
            string filePath;

            var filePathPng = Path.Combine(_Path + $"\\upload\\images\\{origem}\\", fileUrl);
            var filePathJpg = Path.Combine(_Path + $"\\upload\\images\\{origem}\\", fileUrl.Replace("png","jpg"));

            if (System.IO.File.Exists(filePathPng))
               filePath = filePathPng;
            else
            if (System.IO.File.Exists(filePathJpg))
               filePath = filePathJpg;
            else
               return NotFound();

            var memory = new MemoryStream();
            await using (var stream = new FileStream(filePath, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;

            return File(memory, GetContentType(filePath), filePath);
        }
    }


}
