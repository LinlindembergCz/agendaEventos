using AutoMapper;
using SebraeLab.Bloqueio.Domain;
using SebraeLab.Blqoueio.App.ViewModels;

namespace SebraeLab.Bloqueio.App.AutoMapper
{
    public class ViewModelToDomainMappingBloqueio : Profile
    {
        public ViewModelToDomainMappingBloqueio()
        {
            CreateMap<BloqueadorViewModel, Bloqueador>();
  
        }
    }
}