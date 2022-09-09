using sebraelab.core.domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sebraelab.core.comunication
{
    public interface ISenderEmail
    {
        Task<bool> SendMail(MessengerEntity command);
    }
}
