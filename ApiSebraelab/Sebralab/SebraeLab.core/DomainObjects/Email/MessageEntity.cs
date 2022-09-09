using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sebraelab.core.domain
{
    public class MessengerEntity
    {
        public string Subject { get; set; }

        public string Body { get; set; }

        public string Name { get; set; }

        public string To { get; set; }
    }
}
