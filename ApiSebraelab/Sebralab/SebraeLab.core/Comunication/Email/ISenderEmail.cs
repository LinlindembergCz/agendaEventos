using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sebraelab.core.comunication
{
    public interface ISenderEmail
    {
        Task<bool> SendEmailEvento(MessengerEntity command);
        Task<bool> SendEmailContato(MessengerEntity command);
        
    }
}
