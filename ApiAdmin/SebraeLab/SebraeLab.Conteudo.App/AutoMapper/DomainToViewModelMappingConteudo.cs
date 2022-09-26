using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using SebraeLab.Conteudo.App.ViewModels;
using SebraeLab.Conteudo.Domain;

namespace SebraeLab.Conteudo.App.AutoMapper
{
    public class DomainToViewModelMappingConteudo : Profile
    {
        public DomainToViewModelMappingConteudo()
        {
            CreateMap<ConteudoSebraeLab, ConteudoSebraeLabViewModel>();
        
        }
    }
}
