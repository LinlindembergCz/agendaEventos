using Microsoft.Extensions.Configuration;
using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using SebraeLab.Core.Configuration;
using SebraeLab.Core.Configuration.Mailing;

namespace sebraelab.core.comunication
{
    public class SenderEmail : ISenderEmail
    {
        public IAppConfig Configuration { get; }
        public SenderEmail(IAppConfig config)
        {
            Configuration = config;
        }

        private async void SendMail(MessengerEntity command)
        {
            try
            {
                var mailingConfig = Configuration.Mailing;

                MailMessage mail = new MailMessage(command.from,
                                                   command.to,
                                                   command.Subject,
                                                   command.Body);

                mail.IsBodyHtml = true;

                var smtpClient = new SmtpClient(mailingConfig.SMTPServer,
                                                mailingConfig.SMTPPort)
                {
                    EnableSsl = mailingConfig.SMTPUseSSL,
                    Credentials = (!Configuration.Mailing.SMTPUseCredentials)
                    ? CredentialCache.DefaultNetworkCredentials
                    : new NetworkCredential(mailingConfig.MailFromCredentialName, mailingConfig.MailFromCredentialPassword)
                };

                smtpClient.Send(mail);

            }
            catch (Exception ex)
            {
                throw new NotImplementedException(ex.Message);
                //throw new EmailNaoEnviadoException(mail, ex);
            }
        }

        public async Task<bool> SendEmailEvento(MessengerEntity command)
        {
            try
            {
                command.to = Configuration.Mailing.MailTo;
                SendMail(command);
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw new NotImplementedException(ex.Message);
                //throw new EmailNaoEnviadoException(mail, ex);
            }
        }

        public async Task<bool> SendEmailContato(MessengerEntity command)
        {
            try
            {
                command.to = Configuration.Mailing.MailTo;
                SendMail(command);
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw new NotImplementedException(ex.Message);
                //throw new EmailNaoEnviadoException(mail, ex);
            }
        }
    }
}
