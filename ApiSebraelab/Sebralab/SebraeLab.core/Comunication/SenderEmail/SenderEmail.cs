using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace sebraelab.core.comunication
{
    public class SenderEmail : ISenderEmail
    {
        public async Task<bool> SendMail(MessengerEntity command)
        {
            // cria uma mensagem
            MailMessage mensagemEmail = new MailMessage(
                "lcaraujo1@latam.stefanini.com",
                "lindemberg.cortez@gmail.com", 
                "TESTE", 
                "TESTE DE ENVIO DE EMAIL");

            SmtpClient client = new SmtpClient("10.9.4.9", 2527);

            // inclui as credenciais
            client.UseDefaultCredentials = true;

            // envia a mensagem
            client.Send(mensagemEmail);

            return true;
        }

    }
}
