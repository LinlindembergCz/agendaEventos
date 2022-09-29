using Microsoft.AspNetCore.Mvc;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;
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
        Task<bool> Add(EventoSebraeLabViewModel eventosebraelabViewModel);
        Task<bool> Update(EventoSebraeLabViewModel eventosebraelabViewModel);
        


    }
}
