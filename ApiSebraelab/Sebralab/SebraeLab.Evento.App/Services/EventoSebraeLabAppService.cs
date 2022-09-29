
using AutoMapper;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SebraeLab.Bloqueio.Domain;

namespace SebraeLab.Evento.App.Services
{
    public class EventoSebraeLabAppService : IEventoSebraeLabAppService
    {
        private readonly IEventoSebraeLabRepository _repository;
        private readonly IMapper _mapper;

        public EventoSebraeLabAppService(IEventoSebraeLabRepository repository,
                                 IMapper mapper
                             )
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<EventoSebraeLabViewModel> GetById(Guid id)
        {
            return _mapper.Map<EventoSebraeLabViewModel>(await _repository.GetById(id));
        }


        public async Task<List<EventoSebraeLabViewModel>> GetAll()
        {
            return _mapper.Map<List<EventoSebraeLabViewModel>>(await _repository.GetAll());
        }

        public async Task<bool> Add(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);

             _repository.Add(evento);    
             _repository.UnitOfWork.Commit();

            return true;
                        
        }

        public async Task<bool> Update(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);
            _repository.Update(evento);

            _repository.UnitOfWork.Commit();

            return true;
        }



        public void Dispose()
        {
            _repository?.Dispose();
        }

    }
}