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
        Task<List<EventoSebraeLabViewModel>> GetAll(bool onlypublished = false);
        Task<EventoSebraeLabViewModel> GetById(Guid id);
        Task<List<EventoSebraeLabViewModel>> Search(string value);
        Task<bool> Alocados(string Data, string horainicio, string horafinal, string id ="" );        
        Task<bool> Add(EventoSebraeLabViewModel eventosebraelabViewModel);
        Task<bool> Update(EventoSebraeLabViewModel eventosebraelabViewModel);

        Task<bool> Publish(Guid id);



    }
}
