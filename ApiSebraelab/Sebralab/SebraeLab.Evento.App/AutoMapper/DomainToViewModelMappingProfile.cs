using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;

namespace SebraeLab.Evento.App.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<EventoSebraeLab, EventoSebraeLabViewModel>();
        
        }
    }
}
