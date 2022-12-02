using Microsoft.Extensions.Configuration;
using SebraeLab.Core.Configuration;
using SebraeLab.Core.Configuration.Info;
using SebraeLab.Core.Configuration.Mailing;

namespace SebraeLab.Core.Configuration
{
    public class AppConfigDev : IAppConfig
    {
        private readonly IConfiguration config;

        public AppConfigDev(IConfiguration config)
        {
            this.config = config;
        }

        //public IAuthConfig Auth { get => new AuthConfig(config, EnvironmentEnum.Development); }
        //public IWebConfig Web { get => new WebConfig(config, FileSystem, EnvironmentEnum.Development); }
        //public IDatabaseConfig Database { get => new DatabaseConfig(config, EnvironmentEnum.Development); }
        public IInfoConfig Info { get => new InfoConfig(config, EnvironmentEnum.Development); }
        public IMailingConfig Mailing { get => new MailingConfig(config, EnvironmentEnum.Development); }
        //public IFileSystemConfig FileSystem { get => new FileSystemConfig(config, EnvironmentEnum.Development); }
        //public ILogConfig Log { get => new LogConfig(config, EnvironmentEnum.Development); }
    }
}
