using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using System.Transactions;

namespace SebraeLab.Bloqueio.Domain
{
    public class DiaBloqueado : Entity
    {
        [JsonIgnore]        
        public Guid? Bloqueadorid { get; private set; }
        public DateTime? Data { get; private set; }
        public string? Horainicio { get; private set; }
        public string? Horafim { get; private set; }
        public string? Options { get; private set; }

        [JsonIgnore]
        public Bloqueador? Bloqueador { get; set; }

        public DiaBloqueado(bool generateid = true)
        {
          
        }
        [JsonConstructor]
        public DiaBloqueado( 
            DateTime? data , string? options, string? horainicio, string? horafim
            )
        {
            Data = data;
            Options = options;
            Horainicio = horainicio;
            Horafim = horafim;
        }
    }
}
