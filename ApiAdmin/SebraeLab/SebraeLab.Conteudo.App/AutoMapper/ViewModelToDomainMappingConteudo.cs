using AutoMapper;
using SebraeLab.Conteudo.App.ViewModels;
using SebraeLab.Conteudo.Domain;

namespace SebraeLab.Conteudo.App.AutoMapper
{
    public class ViewModelToDomainMappingConteudo : Profile
    {
        public ViewModelToDomainMappingConteudo()
        {
            CreateMap<ConteudoSebraeLabViewModel, ConteudoSebraeLab>();
  
        }
    }
}