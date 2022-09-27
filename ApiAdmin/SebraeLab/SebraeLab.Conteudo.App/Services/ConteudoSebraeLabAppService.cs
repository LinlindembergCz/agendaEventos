
using AutoMapper;
using SebraeLab.Conteudo.Domain;
using SebraeLab.Conteudo.Data.Repository;
using SebraeLab.Conteudo.App.ViewModels;
using SebraeLab.Core.Data;

namespace SebraeLab.Conteudo.App.Services
{
    public class ConteudoSebraeLabAppService : IConteudoSebraeLabAppService
    {
        private readonly IConteudoSebraeLabRepository _repository;
        private readonly IMapper _mapper;

        public ConteudoSebraeLabAppService(IConteudoSebraeLabRepository repository,
                                 IMapper mapper
                             )
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<ConteudoSebraeLabViewModel> GetById(Guid id)
        {
            return _mapper.Map<ConteudoSebraeLabViewModel>(await _repository.GetById(id));
        }


        public async Task<List<ConteudoSebraeLabViewModel>> GetAll()
        {
            return _mapper.Map<List<ConteudoSebraeLabViewModel>>(await _repository.GetAll());
        }


        public Task<bool> Add(ConteudoSebraeLabViewModel conteudoebraelabViewModel)
        {
            var evento = _mapper.Map<ConteudoSebraeLab>(conteudoebraelabViewModel);

            _repository.Add(evento);
            _repository.UnitOfWork.Commit();

            return Task.FromResult(true);
                        
        }

        public Task<bool> Update(ConteudoSebraeLabViewModel conteudoebraelabViewModel)
        {
            var evento = _mapper.Map<ConteudoSebraeLab>(conteudoebraelabViewModel);
            _repository.Update(evento);

            _repository.UnitOfWork.Commit();

            return Task.FromResult(true);
        }

        public async Task<bool> Remove(Guid id)
        {
            ConteudoSebraeLabViewModel conteudoViewModel = _mapper.Map<ConteudoSebraeLabViewModel>( await _repository.GetById(id));

            var conteudo = _mapper.Map<ConteudoSebraeLab>(conteudoViewModel);
            _repository.Remove(conteudo);

            _repository.UnitOfWork.Commit();

            return true;
        }

        public void Dispose()
        {
            _repository?.Dispose();
        }

    }
}