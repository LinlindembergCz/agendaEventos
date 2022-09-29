using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace SebraeLab.Bloqueio.Domain
{
    public class Bloqueador : Entity
    {
        public string? Motivo { get; private set; }

        public List<DiaBloqueado>? Dias { get; private set; }

        public DateTime Datacadastro { get; private set; }

        public Bloqueador()
        {
            Dias = new List<DiaBloqueado>();
        }
        [JsonConstructor]
        public Bloqueador(string motivo)
        {
            Motivo = motivo;
        }
    }
}
