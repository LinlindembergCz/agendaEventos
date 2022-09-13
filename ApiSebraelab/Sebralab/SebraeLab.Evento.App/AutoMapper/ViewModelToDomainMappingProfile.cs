using AutoMapper;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;

namespace SebraeLab.Evento.App.AutoMapper
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<EventoSebraeLabViewModel, EventoSebraeLab>();
  
        }
    }
}