using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;

namespace SebraeLabAdmin.Controllers
{

    [ApiController]
    [AllowAnonymous]
    public class FileTransferController : ControllerBase
    {
        private string _Path = "//STFSAON006326-L//temp";
        
        public FileTransferController() 
        {
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
                    if (!Directory.Exists(_Path + $"\\upload\\images\\{origem}\\"))
                    {
                        Directory.CreateDirectory(_Path + $"\\upload\\images\\{origem}\\");
                    }

                    FileInfo fileInfo = new FileInfo(image_file.FileName);

                    var filename = image_file.Name + fileInfo.Extension;

                    using (FileStream filestream = System.IO.File.Create(_Path + $"\\upload\\images\\{origem}\\" + filename))
                    {
                        await image_file.CopyToAsync(filestream);

                        filestream.Flush();

                        return Created($"/upload/images/{origem}/" + filename, new { Uri = $"/upload/images/{origem}/" + filename });
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
            var filePath = Path.Combine(_Path + $"\\upload\\images\\{origem}\\", fileUrl);

            if (!System.IO.File.Exists(filePath))
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
