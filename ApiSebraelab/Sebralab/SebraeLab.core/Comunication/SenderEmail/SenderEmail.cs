﻿using sebraelab.core.domain;
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
            MailMessage mensagemEmail = new MailMessage("lindemberg.cortez@gmail.com",
                "lindemberg.cortez@gmail.com", 
                "TESTE", 
                "TESTE DE ENVIO DE EMAIL");

            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
            client.EnableSsl = true;
            NetworkCredential cred = new NetworkCredential("lindemberg.cortez@gmail.com", "!qa@ws#ed");
            client.Credentials = cred;

            // inclui as credenciais
            client.UseDefaultCredentials = true;

            // envia a mensagem
            client.Send(mensagemEmail);

            return true;
        }

    }
}
