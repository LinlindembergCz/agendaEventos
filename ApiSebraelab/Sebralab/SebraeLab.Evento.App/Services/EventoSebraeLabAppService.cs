
using AutoMapper;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SebraeLab.Evento.App.Services
{
    public class EventoSebraeLabAppService : IEventoSebraeLabAppService
    {
        private readonly IEventoSebraeLabRepository _eventosebraelabRepository;
        private readonly IMapper _mapper;

        public EventoSebraeLabAppService(IEventoSebraeLabRepository eventosebraelabRepository,
                                 IMapper mapper
                             )
        {
            _eventosebraelabRepository = eventosebraelabRepository;
            _mapper = mapper;
        }

        public async Task<EventoSebraeLabViewModel> GetById(Guid id)
        {
            return _mapper.Map<EventoSebraeLabViewModel>(await _eventosebraelabRepository.GetById(id));
        }


        public async Task<List<EventoSebraeLabViewModel>> GetAll()
        {
            return _mapper.Map<List<EventoSebraeLabViewModel>>(await _eventosebraelabRepository.GetAll());
        }

        public async  Task<List<BloqueioDia>> GetAllDiasBloqueados()
        {
           return _mapper.Map<List<BloqueioDia>>(await _eventosebraelabRepository.GetAllDiasBloqueados());
        }

        public Task<bool> Add(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);

             _eventosebraelabRepository.Add(evento);    
             _eventosebraelabRepository.UnitOfWork.Commit();

            return Task.FromResult(true);
                        
        }

        public Task<bool> Update(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);
            _eventosebraelabRepository.Update(evento);

            _eventosebraelabRepository.UnitOfWork.Commit();

            return Task.FromResult(true);
        }

       /* public async Task<bool> Bloquear(Guid id)
        {
            EventoSebraeLabViewModel evento = _mapper.Map<EventoSebraeLabViewModel>(await _eventosebraelabRepository.GetById(id));

            evento.Status = "Bloqueado";

            _eventosebraelabRepository.Update(_mapper.Map<EventoSebraeLab>(evento));

            _eventosebraelabRepository.UnitOfWork.Commit();

            return true;
        }*/

        public  Task<bool> BloquearDias(DateTime[] dates)
        {
            foreach (var item in dates)
            {
                var bloqueio = new BloqueioDia( item );
                _eventosebraelabRepository.AddBloqueio( bloqueio );
            }
            _eventosebraelabRepository.UnitOfWork.Commit();
            return Task.FromResult(true);
        }

        public void Dispose()
        {
            _eventosebraelabRepository?.Dispose();
        }

    }
}