using SebraeLab.Evento.App.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SebraeLab.Evento.App.Services
{
    public interface IEventoSebraeLabAppService : IDisposable
    {
        Task<List<EventoSebraeLabViewModel>> GetAll();
        Task<EventoSebraeLabViewModel> GetById(Guid id);

        void Add(EventoSebraeLabViewModel eventosebraelabViewModel);
        void Update(EventoSebraeLabViewModel eventosebraelabViewModel);

    }
}
