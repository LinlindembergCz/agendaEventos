using AutoMapper;
using SebraeLab.Bloqueio.Domain;
using SebraeLab.Blqoueio.App.ViewModels;

namespace SebraeLab.Bloqueio.App.AutoMapper
{
    public class DomainToViewModelMappingBloqueio : Profile
    {
        public DomainToViewModelMappingBloqueio()
        {
            CreateMap<Bloqueador, BloqueadorViewModel>();
        
        }
    }
}
