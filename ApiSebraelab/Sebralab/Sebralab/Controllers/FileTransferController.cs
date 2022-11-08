using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;


namespace SebraeLabAdmin.Controllers
{
    [ApiController]
    [AllowAnonymous]
    public class FileTransferController : ControllerBase
    {                          //"C:\\_\\Fecomercio\\BusinessmanOpines\\FrontEnd\\src";//
        private string _Path = "";////STFSAON006326-L//temp

        public FileTransferController(IConfiguration configuration)
        {
            this._Path = configuration.GetValue<String>("PathTransfer");
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
        [Route("api/download/image/{origem}")]
        public async Task<IActionResult> Download(string origem, [FromQuery] string fileUrl)
        {
            string filePath;

            var filePathPng = Path.Combine(_Path + $"\\upload\\images\\{origem}\\", fileUrl);
            var filePathJpg = Path.Combine(_Path + $"\\upload\\images\\{origem}\\", fileUrl.Replace("png", "jpg"));

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