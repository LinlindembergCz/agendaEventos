using SebraeLab.Core.Data;
using SebraeLab.Evento.Domain;

namespace SebraeLab.Evento.Data.Repository
{
    public interface IEventoSebraeLabRepository : IRepository<EventoSebraeLab>
    {
        Task<List<EventoSebraeLab>> GetAll(bool onlypublished = false);      
        Task<EventoSebraeLab> GetById(Guid id);
        Task<List<EventoSebraeLab>> Search(string value, bool onlypublished = false);
        Task<bool> Available(string Data, string horainicio, string horafinal, string id);
        void Add(EventoSebraeLab evento);
        void Update(EventoSebraeLab evento);
    }
}
