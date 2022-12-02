using SebraeLab.Core.DomainObjects;
using System.Net;
using System.Net.Mail;

using SebraeLab.Core.Configuration;


namespace sebraelab.core.comunication
{
    public class SenderEmail : ISenderEmail
    {
        public IAppConfig Configuration { get; }
        public SenderEmail(IAppConfig config)
        {
            Configuration = config;
        }

        private async Task<bool> SendMail(MessengerEntity command)
        {
            try
            {
                var mailingConfig = Configuration.Mailing;

                MailMessage mail = new MailMessage(command.From,
                                                   command.To,
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

                return true;

            }
            catch (Exception ex)
            {
                return false;
                throw new Exception(ex.Message);
                //throw new EmailNaoEnviadoException(mail, ex);
            }
        }

        public async Task<bool> SendEmailEvento(MessengerEntity command)
        {
            try
            {
                command.To = Configuration.Mailing.MailTo;
                
                return SendMail(command).Result;
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
                command.To = Configuration.Mailing.MailTo;                
                return SendMail(command).Result; 
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
