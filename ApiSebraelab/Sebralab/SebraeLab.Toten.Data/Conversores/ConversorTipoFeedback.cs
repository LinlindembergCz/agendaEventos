using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SebraeLab.Toten.Domain.Enum;

namespace SebraeLab.Toten.Data.Conversores
{
    public class ConversorTipoFeedback : ValueConverter<TipoEventoEnum, string>
    {
        public ConversorTipoFeedback() : base(
            p => ConverterParaOhBancoDeDados(p),
            value => ConverterParaAplicacao(value),
            new ConverterMappingHints(1))
        {

        }

        static string ConverterParaOhBancoDeDados(TipoEventoEnum tipo)
        {
            return tipo.ToString()[0..1];
        }

        static TipoEventoEnum ConverterParaAplicacao(string value)
        {
            var tipo = Enum
                .GetValues<TipoEventoEnum>()
                .FirstOrDefault(p => p.ToString()[0..1] == value);

            return tipo;
        }
    }
}
