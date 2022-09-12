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
        Task<IEnumerable<EventoSebraeLab>> ObterTodos();
        Task<EventoSebraeLab> ObterPorId(Guid id);
        void Adicionar(EventoSebraeLab evento);
        void Atualizar(EventoSebraeLab evento);

    }
}
