
using AutoMapper;
using SebraeLab.Conteudo.Domain;
using SebraeLab.Conteudo.Data.Repository;
using SebraeLab.Conteudo.App.ViewModels;
using SebraeLab.Core.Data;
using SebraeLab.Conteudo.Domain.Enums;

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

        public async Task<List<ConteudoSebraeLabViewModel>> GetByTipo(TipoPublicacao tipo)
        {
            return _mapper.Map<List<ConteudoSebraeLabViewModel>>(await _repository.GetByTipo(tipo));
        }


        public async Task<List<ConteudoSebraeLabViewModel>> GetAll()
        {
            return _mapper.Map<List<ConteudoSebraeLabViewModel>>(await _repository.GetAll());
        }

        public async Task<List<ConteudoSebraeLabViewModel>> Search(string search)
        {
            return _mapper.Map<List<ConteudoSebraeLabViewModel>>(await _repository.Search(search) );
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

        public async Task<bool> Inactive(Guid id)
        {
            ConteudoSebraeLab conteudo = await _repository.GetById(id);
            conteudo.Inativar();            
            _repository.Update(conteudo);
            _repository.UnitOfWork.Commit();
            return true;
        }

        public async Task<bool> Active(Guid id)
        {
            ConteudoSebraeLab conteudo = await _repository.GetById(id);
            conteudo.Ativar();
            _repository.Update(conteudo);
            _repository.UnitOfWork.Commit();
            return true;
        }

        public async Task<bool> Publish(Guid id)
        {
            ConteudoSebraeLab conteudo = await _repository.GetById(id);
            conteudo.Publish();
            _repository.Update(conteudo);
            _repository.UnitOfWork.Commit();
            return true;
        }

        public void Dispose()
        {
            _repository?.Dispose();
        }

    }
}