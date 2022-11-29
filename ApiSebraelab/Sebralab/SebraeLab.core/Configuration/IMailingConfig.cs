using System;
using System.Collections.Generic;
using System.Text;

namespace SebraeLab.Core.Configuration
{
    public interface IMailingConfig
    {
        string MailTo { get; }
        string MailFrom { get; }
        string MailFromCredentialName { get; }
        string MailFromCredentialPassword { get; }
        string SMTPServer { get; }
        int SMTPPort { get; }
        bool SMTPUseSSL { get; }
        bool SMTPUseCredentials { get; }
    }
}