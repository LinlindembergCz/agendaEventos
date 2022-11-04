using SebraeLab.Evento.App.AutoMapper;
using SebraeLab.Toten.App.AutoMapper;

namespace SebraeLabToten.Setup
{
    public static class Mappers
    {
        public static void RegisterMappers(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(DomainToViewModelMappingEvento),
                                        typeof(ViewModelToDomainMappingEvento));

            services.AddAutoMapper(typeof(DomainToViewModelMappingToten),
                                           typeof(ViewModelToDomainMappingToten));

        }
    }
}
