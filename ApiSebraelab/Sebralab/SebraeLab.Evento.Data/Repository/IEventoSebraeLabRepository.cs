using SebraeLab.Core.Data;
using SebraeLab.Evento.Domain;

namespace SebraeLab.Evento.Data.Repository
{
    public interface IEventoSebraeLabRepository : IRepository<EventoSebraeLab>
    {
        Task<List<EventoSebraeLab>> GetAll(bool onlypublished = false);      
        Task<EventoSebraeLab> GetById(Guid id);        
        void Add(EventoSebraeLab evento);
        void Update(EventoSebraeLab evento);
    }
}
