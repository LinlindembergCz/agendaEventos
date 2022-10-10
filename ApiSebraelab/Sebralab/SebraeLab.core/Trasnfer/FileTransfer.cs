using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace sebraelab.core.transfer
{
    public class FileTransfer : IFileTransfer
    {
        private string _Path = "//STFSAON006326-L//temp";
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

        public async Task<IActionResult> Download(string fileUrl)
        {
            return null;
        }
        public async Task<IActionResult> UploadImage(string fileUrl)
        {
            return null;
        }
    }
}
