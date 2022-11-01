using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using SebraeLab.NewsLetter.App.ViewModels;
using SebraeLab.NewsLetter.Domain;

namespace SebraeLab.NewsLetter.App.AutoMapper
{
    public class DomainToViewModelMappingNewsLetter : Profile
    {
        public DomainToViewModelMappingNewsLetter()
        {
            CreateMap<InscricaoNewsLetter, NewsLetterViewModel>();
        
        }
    }
}
