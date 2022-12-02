using SebraeLab.Core.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace SebraeLab.Core.Configuration
{
    public interface IAppConfig
    {
        //IWebConfig Web { get; }
        //IAuthConfig Auth { get; }
        //IDatabaseConfig Database { get; }
        IMailingConfig Mailing { get; }
        IInfoConfig Info { get; }

        //IFileSystemConfig FileSystem { get; }
        //ILogConfig Log { get; }
    }
}