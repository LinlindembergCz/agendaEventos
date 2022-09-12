using SebraeLab.Evento.App.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SebraeLab.Evento.App.Services
{
    public interface IEventoSebraeLabAppService  : IDisposable
    {
        Task<IEnumerable<EventoSebraeLabViewModel>> ObterTodos();

        Task<EventoSebraeLabViewModel> ObterPorId(Guid id);

        Task AdicionarEvento(EventoSebraeLabViewModel eventosebraelabViewModel);
        Task AtualizarEvento(EventoSebraeLabViewModel eventosebraelabViewModel);

    }
}
