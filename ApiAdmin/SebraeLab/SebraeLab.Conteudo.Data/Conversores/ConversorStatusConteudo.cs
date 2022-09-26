using System;
using System.Linq;

using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SebraeLab.Conteudo.Domain.Enums;

namespace SebraeLab.Conteudo.Data
{
    public class ConversorStatusConteudo : ValueConverter<StatusConteudo, string>
    {
        public ConversorStatusConteudo() : base(
            p=>ConverterParaOhBancoDeDados(p),
            value => ConverterParaAplicacao(value),
            new ConverterMappingHints(1))
        {
            
        }

        static string ConverterParaOhBancoDeDados(StatusConteudo status)
        {
            return status.ToString()[0..1];
        }

        static StatusConteudo ConverterParaAplicacao(string value)
        {
            var status = Enum
                .GetValues<StatusConteudo>()
                .FirstOrDefault(p=>p.ToString()[0..1] == value);

            return status;
        }
    }
}