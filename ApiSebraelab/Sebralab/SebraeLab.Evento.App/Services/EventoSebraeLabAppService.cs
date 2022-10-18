
using AutoMapper;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;
using SebraeLab.Evento.App.Services;
using SebraeLab.Evento.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SebraeLab.Bloqueio.Domain;
using Newtonsoft.Json.Linq;

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
        public async Task<List<EventoSebraeLabViewModel>> GetAll(bool onlypublished = false)
        {
            return _mapper.Map<List<EventoSebraeLabViewModel>>(await _repository.GetAll(onlypublished));
        }
        public async Task<List<EventoSebraeLabViewModel>> Search(string value , bool onlypublished = false)
        {
            return _mapper.Map<List<EventoSebraeLabViewModel>>(await _repository.Search(value, onlypublished));
        }
        public async  Task<bool> Alocados(string Data, string horainicio, string horafinal, string id)
        {
            return await _repository.Alocados( Data,  horainicio,  horafinal, id);
        }
        private void verifyAvailable(EventoSebraeLabViewModel eventosebraelabViewModel, string id = "")
        {
            if (eventosebraelabViewModel != null)
            {
                eventosebraelabViewModel.Dias.ForEach(d =>
                {
                    if (_repository.Alocados(d.Data?.ToString("yyyy/MM/dd"),
                                             d.Horainicio,
                                             d.Horafim,
                                             id).Result == true)

                    {
                        throw new NotImplementedException($"Já existe EVENTO agendado para está data {d.Data?.ToString("dd/MM/yyyy")} - {d.Horainicio} - {d.Horafim} ");
                    }
                });
            }
        }
        public async Task<bool> Add(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            if( eventosebraelabViewModel.EhValido())
            { 
                verifyAvailable(eventosebraelabViewModel);
                var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);
                _repository.Add(evento);    
                _repository.UnitOfWork.Commit();
                return true;
            }
            else
            {
                return false;
            }

        }
        public async Task<bool> Update(EventoSebraeLabViewModel eventosebraelabViewModel)
        {
            if (eventosebraelabViewModel.EhValido())
            { 
                verifyAvailable(eventosebraelabViewModel, eventosebraelabViewModel.Id.ToString() );

                var evento = _mapper.Map<EventoSebraeLab>(eventosebraelabViewModel);
                _repository.Update(evento);

                _repository.UnitOfWork.Commit();

                return true;
            }
            else
            {
                return false;
            }
        }
        public async Task<bool> Publish(Guid id)
        {
            EventoSebraeLab evento = await _repository.GetById(id);
            evento.Publish();
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