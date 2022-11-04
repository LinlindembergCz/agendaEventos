using AutoMapper;
using SebraeLab.Toten.App.ViewModels;
using SebraeLab.Toten.Domain;

namespace SebraeLab.Toten.App.AutoMapper
{
    public class DomainToViewModelMappingToten : Profile
    {
        public DomainToViewModelMappingToten()
        {
            CreateMap<FeedbackUsuario, FeedbackUsuarioViewModel>();
        }
    }
}