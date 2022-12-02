using Microsoft.Extensions.Configuration;
using SebraeLab.Core.Configuration;
using SebraeLab.Core.Configuration.Info;
using SebraeLab.Core.Configuration.Mailing;



namespace SebraeLab.Core.Configuration
{
    public class AppConfigProd : IAppConfig
    {
        private readonly IConfiguration config;

        public AppConfigProd(IConfiguration config)
        {
            this.config = config;
        }

        //public IAuthConfig Auth { get => new AuthConfig(config, EnvironmentEnum.Production); }
        //public IWebConfig Web { get => new WebConfig(config, FileSystem, EnvironmentEnum.Production); }
        //public IDatabaseConfig Database { get => new DatabaseConfig(config, EnvironmentEnum.Production); }
        public IInfoConfig Info { get => new InfoConfig(config, EnvironmentEnum.Production); }

        public IMailingConfig Mailing { get => new MailingConfig(config, EnvironmentEnum.Production); }
        //public IFileSystemConfig FileSystem { get => new FileSystemConfig(config, EnvironmentEnum.Production); }
        //public ILogConfig Log { get => new LogConfig(config, EnvironmentEnum.Production); }
    }
}
