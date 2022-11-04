using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SebraeLab.Toten.Domain.Enum;

namespace SebraeLab.Toten.Data.Conversores
{
    public class ConversorNascimentoFeedback : ValueConverter<MesEnum, string>
    {
        public ConversorNascimentoFeedback() : base(
            p => ConverterParaOhBancoDeDados(p),
            value => ConverterParaAplicacao(value),
            new ConverterMappingHints(1))
        {

        }

        static string ConverterParaOhBancoDeDados(MesEnum mes)
        {
            return mes.ToString()[0..1];
        }

        static MesEnum ConverterParaAplicacao(string value)
        {
            var mes = Enum
                .GetValues<MesEnum>()
                .FirstOrDefault(p => p.ToString()[0..1] == value);

            return mes;
        }
    }
}