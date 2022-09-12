using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using SebraeLab.Evento.App.ViewModels;
using SebraeLab.Evento.Domain;

namespace NerdStore.Catalogo.Application.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<EventoSebraeLab, EventoSebraeLabViewModel>();

        
        }
    }
}
