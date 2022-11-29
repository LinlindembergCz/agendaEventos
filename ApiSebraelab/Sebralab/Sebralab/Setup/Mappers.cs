using SebraeLab.Bloqueio.App.AutoMapper;
using SebraeLab.Conteudo.App.AutoMapper;
using SebraeLab.Evento.App.AutoMapper;
using SebraeLab.NewsLetter.App.AutoMapper;

namespace SebraeLabAdmin.Setup
{
    public static class Mappers
    {

        public static void RegisterMappers(this WebApplicationBuilder builder)
        {
            builder.Services.AddAutoMapper(typeof(DomainToViewModelMappingEvento),
                                        typeof(ViewModelToDomainMappingEvento));

            builder.Services.AddAutoMapper(typeof(DomainToViewModelMappingConteudo),
                                           typeof(ViewModelToDomainMappingConteudo));

            builder.Services.AddAutoMapper(typeof(DomainToViewModelMappingBloqueio),
                                          typeof(ViewModelToDomainMappingBloqueio));

            builder.Services.AddAutoMapper(typeof(DomainToViewModelMappingNewsLetter),
                                   typeof(ViewModelToDomainMappingNewsLetter));
        }
    }
}
