
using Microsoft.Extensions.Configuration;
using SebraeLab.Core.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace SebraeLab.Core.Configuration.Mailing
{
    public class MailingConfig : IMailingConfig
    {
        private readonly IConfigurationSection envSection;
        public MailingConfig(IConfiguration config, EnvironmentEnum env)
        {
           envSection = config.GetSection("Smtp");
        }        
        public string SMTPServer => envSection["SMTPServer"];
        public int SMTPPort => Convert.ToInt32(envSection["SMTPPort"]);
        public bool SMTPUseSSL => Convert.ToBoolean(envSection["SMTPUseSSL"]);
        public bool SMTPUseCredentials => Convert.ToBoolean(envSection["SMTPUseCredentials"]);
        public string MailFrom => envSection["MailFrom"];
        public string MailTo => envSection["MailTo"];
        public string MailFromCredentialName => envSection["MailFromCredentialName"];
        public string MailFromCredentialPassword => envSection["MailFromCredentialPassword"];
        
    }
}
