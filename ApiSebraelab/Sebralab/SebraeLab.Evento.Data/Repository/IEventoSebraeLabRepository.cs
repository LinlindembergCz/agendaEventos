using SebraeLab.Core.Data;
using SebraeLab.Evento.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SebraeLab.Evento.Data.Repository
{
    public interface IEventoSebraeLabRepository : IRepository<EventoSebraeLab>
    {
        Task<List<EventoSebraeLab>> GetAll();

        Task<List<BloqueioDia>> GetAllDiasBloqueados();

        
        Task<EventoSebraeLab> GetById(Guid id);        
        void Add(EventoSebraeLab evento);
        void Update(EventoSebraeLab evento);
        void AddBloqueio(BloqueioDia evento);
    }
}
