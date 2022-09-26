using AutoMapper;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;

namespace SebraeLab.Evento.App.AutoMapper
{
    public class ViewModelToDomainMappingEvento : Profile
    {
        public ViewModelToDomainMappingEvento()
        {
            CreateMap<EventoSebraeLabViewModel, EventoSebraeLab>();
  
        }
    }
}