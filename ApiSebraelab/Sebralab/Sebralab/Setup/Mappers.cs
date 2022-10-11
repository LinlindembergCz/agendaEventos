using SebraeLab.Bloqueio.App.AutoMapper;
using SebraeLab.Conteudo.App.AutoMapper;
using SebraeLab.Evento.App.AutoMapper;

namespace SebraeLabAdmin.Setup
{
    public static class Mappers
    {

        public static void RegisterMappers(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(DomainToViewModelMappingEvento),
                                        typeof(ViewModelToDomainMappingEvento));

            services.AddAutoMapper(typeof(DomainToViewModelMappingConteudo),
                                           typeof(ViewModelToDomainMappingConteudo));
            services.AddAutoMapper(typeof(DomainToViewModelMappingBloqueio),
                                          typeof(ViewModelToDomainMappingBloqueio));

        }
    }
}
