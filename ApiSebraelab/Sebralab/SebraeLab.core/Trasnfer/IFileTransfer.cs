using Microsoft.AspNetCore.Mvc;
using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sebraelab.core.transfer
{
    public interface IFileTransfer
    {
        Task<IActionResult> Download(string fileUrl);
        Task<IActionResult> UploadImage(string fileUrl);
    }
}
