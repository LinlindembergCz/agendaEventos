
using Microsoft.Extensions.Configuration;
using SebraeLab.Core.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace SebraeLab.Core.Configuration.Info
{
    public class InfoConfig : IInfoConfig
    {
        private readonly IConfigurationSection envSection;
        public InfoConfig(IConfiguration config, EnvironmentEnum env)
        {
           envSection = config.GetSection("Info");
        }        
        public string Email => envSection["Email"];
        public string Telefone => envSection["Telefone"];

    }
}
