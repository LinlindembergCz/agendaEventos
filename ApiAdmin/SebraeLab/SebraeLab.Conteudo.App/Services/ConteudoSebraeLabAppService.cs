
using AutoMapper;
using SebraeLab.Conteudo.Domain;
using SebraeLab.Conteudo.Data.Repository;
using SebraeLab.Conteudo.App.ViewModels;

namespace SebraeLab.Conteudo.App.Services
{
    public class ConteudoSebraeLabAppService : IConteudoSebraeLabAppService
    {
        private readonly IConteudoSebraeLabRepository _eventosebraelabRepository;
        private readonly IMapper _mapper;

        public ConteudoSebraeLabAppService(IConteudoSebraeLabRepository eventosebraelabRepository,
                                 IMapper mapper
                             )
        {
            _eventosebraelabRepository = eventosebraelabRepository;
            _mapper = mapper;
        }

        public async Task<ConteudoSebraeLabViewModel> GetById(Guid id)
        {
            return _mapper.Map<ConteudoSebraeLabViewModel>(await _eventosebraelabRepository.GetById(id));
        }


        public async Task<List<ConteudoSebraeLabViewModel>> GetAll()
        {
            return _mapper.Map<List<ConteudoSebraeLabViewModel>>(await _eventosebraelabRepository.GetAll());
        }


        public Task<bool> Add(ConteudoSebraeLabViewModel conteudoebraelabViewModel)
        {
            var evento = _mapper.Map<ConteudoSebraeLab>(conteudoebraelabViewModel);

             _eventosebraelabRepository.Add(evento);    
             _eventosebraelabRepository.UnitOfWork.Commit();

            return Task.FromResult(true);
                        
        }

        public Task<bool> Update(ConteudoSebraeLabViewModel conteudoebraelabViewModel)
        {
            var evento = _mapper.Map<ConteudoSebraeLab>(conteudoebraelabViewModel);
            _eventosebraelabRepository.Update(evento);

            _eventosebraelabRepository.UnitOfWork.Commit();

            return Task.FromResult(true);
        }
        public void Dispose()
        {
            _eventosebraelabRepository?.Dispose();
        }

    }
}