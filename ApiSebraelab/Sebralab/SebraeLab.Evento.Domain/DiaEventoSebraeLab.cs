using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;


namespace SebraeLab.Evento.Domain
{
    public class DiaEventoSebraeLab : Entity
    {
        [JsonIgnore]
        public Guid Eventoid { get; private set; }
        public DateTime? Data { get; private set; }
        public string? Horainicio { get; private set; }
        public string? Horafim { get; private set; }

        public string? Option { get; private set; }

        [JsonIgnore]
        public EventoSebraeLab? Evento { get; set; }

        public DiaEventoSebraeLab() { }

        [JsonConstructor]
        public DiaEventoSebraeLab( //Guid eventoid,
            DateTime? data, string? horainicio, string? horafim, string? option
            //, Guid id
            )
        {          
            //Eventoid = eventoid;
            Data = data;
            Horainicio = horainicio;
            Horafim = horafim;
            Option = option;           
            //Id = id;
        }
    }
}
