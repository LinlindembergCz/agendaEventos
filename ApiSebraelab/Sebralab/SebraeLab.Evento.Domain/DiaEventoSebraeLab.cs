using SebraeLab.Core.DomainObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SebraeLab.Evento.Domain
{
    public class DiaEventoSebraeLab : Entity
    {
        public DateTime Data { get; private set; }
        public string HoraInicio { get; private set; }
        public string HoraFim { get; private set; }
        public string Option { get; private set; }
        public EventoSebraeLab Evento { get; set; }
        protected DiaEventoSebraeLab() { }

        public DiaEventoSebraeLab(DateTime data, string horaInicio, string horaFim, string option)
        {
            Data = data;
            HoraInicio = horaInicio;
            HoraFim = horaFim;
            Option = option;
        }
    }
}
