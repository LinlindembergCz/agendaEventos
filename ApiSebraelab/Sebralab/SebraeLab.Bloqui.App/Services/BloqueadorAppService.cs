﻿
using AutoMapper;
using SebraeLab.Bloqueio.Data.Repository;
using SebraeLab.Bloqueio.Domain;
using SebraeLab.Blqoueio.App.ViewModels;

namespace SebraeLab.Bloqueio.App.Services
{
    public class BloqueadorAppService : IBloqueadorAppService
    {
        private readonly IBloqueadorRepository _repository;
        private readonly IMapper _mapper;

        public BloqueadorAppService(IBloqueadorRepository repository,
                                 IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<BloqueadorViewModel>> GetAll()
        {
            return _mapper.Map<List<BloqueadorViewModel>>(await _repository.GetAll());
        }


        public async Task<List<DiaBloqueado>> GetAllDiasBloqueado()
        {
            return _mapper.Map<List<DiaBloqueado>>(await _repository.GetAllDiasBloqueado());
        }

        public Task<bool> Add(BloqueadorViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<Bloqueador>(eventosebraelabViewModel);

             _repository.Add(evento);    
             _repository.UnitOfWork.Commit();

            return Task.FromResult(true);
                        
        }

        public Task<bool> Update(BloqueadorViewModel eventosebraelabViewModel)
        {
            var evento = _mapper.Map<Bloqueador>(eventosebraelabViewModel);
            _repository.Update(evento);

            _repository.UnitOfWork.Commit();

            return Task.FromResult(true);
        }

        public void Dispose()
        {
            _repository?.Dispose();
        }

    }
}