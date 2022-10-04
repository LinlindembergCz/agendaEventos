using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SebraeLab.Evento.Domain.Enums;

namespace SebraeLab.Evento.Data
{
    public class ConversorStatus : ValueConverter<Status, string>
    {
        public ConversorStatus() : base(
            p=>ConverterParaOhBancoDeDados(p),
            value => ConverterParaAplicacao(value),
            new ConverterMappingHints(1))
        {
            
        }

        static string ConverterParaOhBancoDeDados(Status status)
        {
            return status.ToString()[0..1];
        }

        static Status ConverterParaAplicacao(string value)
        {
            var status = Enum
                .GetValues<Status>()
                .FirstOrDefault(p=>p.ToString()[0..1] == value);

            return status;
        }
    }
}