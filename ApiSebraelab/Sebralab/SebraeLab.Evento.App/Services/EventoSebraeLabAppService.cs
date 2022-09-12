
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

        public async Task<EventoSebraeLabViewModel> ObterPorId(Guid id)
        {
            return _mapper.Map<EventoSebraeLabViewModel>(await _eventosebraelabRepository.ObterPorId(id));
        }

        public async Task<IEnumerable<EventoSebraeLabViewModel>> ObterTodos()
        {
            return _mapper.Map<IEnumerable<EventoSebraeLabViewModel>>(await _eventosebraelabRepository.ObterTodos());
        }

        public async Task AdicionarEvento(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);
            _eventosebraelabRepository.Adicionar(evento);

            await _eventosebraelabRepository.UnitOfWork.Commit();
        }

        public async Task AtualizarEvento(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);
            _eventosebraelabRepository.Atualizar(evento);

            await _eventosebraelabRepository.UnitOfWork.Commit();
        }

        public void Dispose()
        {
            //_eventosebraelabRepository?.Dispose();

        }

    }
}