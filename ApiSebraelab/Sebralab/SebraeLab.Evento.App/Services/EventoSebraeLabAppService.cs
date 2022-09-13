
using AutoMapper;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data.Repository;

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

        public void Add(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);
            _eventosebraelabRepository.Add(evento);

             _eventosebraelabRepository.UnitOfWork.Commit();
        }

        public void Update(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);
            _eventosebraelabRepository.Update(evento);

            _eventosebraelabRepository.UnitOfWork.Commit();
        }

        public void Dispose()
        {
            _eventosebraelabRepository?.Dispose();
        }

    }
}