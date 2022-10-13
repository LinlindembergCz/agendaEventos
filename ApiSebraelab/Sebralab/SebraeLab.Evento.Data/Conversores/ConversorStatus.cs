using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SebraeLab.Evento.Domain.Enums;

namespace SebraeLab.Evento.Data
{
    public class ConversorStatus : ValueConverter<StatusEvento, string>
    {
        public ConversorStatus() : base(
            p=>ConverterParaOhBancoDeDados(p),
            value => ConverterParaAplicacao(value),
            new ConverterMappingHints(1))
        {
            
        }

        static string ConverterParaOhBancoDeDados(StatusEvento status)
        {
            return status.ToString()[0..1];
        }

        static StatusEvento ConverterParaAplicacao(string value)
        {
            var status = Enum
                .GetValues<StatusEvento>()
                .FirstOrDefault(p=>p.ToString()[0..1] == value);

            return status;
        }
    }
}