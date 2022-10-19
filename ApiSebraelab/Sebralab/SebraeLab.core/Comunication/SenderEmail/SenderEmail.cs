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

            SmtpClient client = new SmtpClient("smtp.office365.com", 587);
            client.EnableSsl = true;
            NetworkCredential cred = new NetworkCredential("lcaraujo1@stefanini.com", "Stefanini@2022");
            client.Credentials = cred;

            // inclui as credenciais
            client.UseDefaultCredentials = true;

            // envia a mensagem
            client.Send(mensagemEmail);

            return true;
        }

    }
}
