using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;


namespace SebraeLabAdmin.Controllers
{
    [ApiController]
    [AllowAnonymous]
    public class DownloadController : ControllerBase
    {                          //"C:\\_\\Fecomercio\\BusinessmanOpines\\FrontEnd\\src";//
        private string _Path = "//STFSAON006326-L//temp";//CC.IoC.Runtime.App.Configuration.GetSection("UploadPath").Value;

        public DownloadController() 
        {
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
        [Route("api/download/image")]
        public async Task<IActionResult> Download([FromQuery] string fileUrl)
        {
            var filePath = Path.Combine(_Path + "\\upload\\images\\", fileUrl);

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