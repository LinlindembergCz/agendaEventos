
using AutoMapper;
using SebraeLab.NewsLetter.App.ViewModels;
using SebraeLab.NewsLetter.Domain;
using SebraeLab.NewsLetter.App.Services;
using SebraeLab.NewsLetter.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace SebraeLab.NewsLetter.App.Services
{
    public class NewsLetterAppService : INewsLetterAppService
    {
        private readonly INewsLetterRepository _repository;
        private readonly IMapper _mapper;
        public NewsLetterAppService(INewsLetterRepository repository,
                                         IMapper mapper )
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<NewsLetterViewModel> GetById(Guid id)
        {
            return _mapper.Map<NewsLetterViewModel>(await _repository.GetById(id));
        }
        public async Task<List<NewsLetterViewModel>> GetAll()
        {
            return _mapper.Map<List<NewsLetterViewModel>>(await _repository.GetAll());
        }

        public async Task<bool> Add(NewsLetterViewModel newsLetterViewModel)
        {
            if(newsLetterViewModel.EhValido())
            { 
                var evento = _mapper.Map<InscricaoNewsLetter>(newsLetterViewModel);
                _repository.Add(evento);    
                _repository.UnitOfWork.Commit();
                return true;
            }
            else
            {
                return false;
            }

        }
        public async Task<bool> Update(NewsLetterViewModel newsLetterViewModel)
        {
            if (newsLetterViewModel.EhValido())
            { 
                 var evento = _mapper.Map<InscricaoNewsLetter>(newsLetterViewModel);
                _repository.Update(evento);
                _repository.UnitOfWork.Commit();
                return true;
            }
            else
            {
                return false;
            }
        }
        public void Dispose()
        {
            _repository?.Dispose();
        }

    }
}