using AutoMapper;
using SebraeLab.NewsLetter.App.ViewModels;
using SebraeLab.NewsLetter.Domain;

namespace SebraeLab.NewsLetter.App.AutoMapper
{
    public class ViewModelToDomainMappingNewsLetter : Profile
    {
        public ViewModelToDomainMappingNewsLetter()
        {
            CreateMap<NewsLetterViewModel, InscricaoNewsLetter>();
  
        }
    }
}