using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SebraeLab.Evento.Domain
{
    public class BloqueioDia : Entity
    {
        public DateTime Data { get; private set; }

        public DateTime DataCadastro { get; private set; }

        public BloqueioDia()
        {
            
        }

        public BloqueioDia( DateTime data )
        {
            Data = data;
        }
    }
}
