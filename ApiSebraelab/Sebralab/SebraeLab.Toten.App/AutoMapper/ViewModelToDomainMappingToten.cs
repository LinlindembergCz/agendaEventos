using AutoMapper;
using SebraeLab.Toten.App.ViewModels;
using SebraeLab.Toten.Domain;

namespace SebraeLab.Toten.App.AutoMapper
{
    public class ViewModelToDomainMappingToten : Profile
    {
        public ViewModelToDomainMappingToten()
        {
            CreateMap<FeedbackUsuarioViewModel, FeedbackUsuario>();
        }
    }
}