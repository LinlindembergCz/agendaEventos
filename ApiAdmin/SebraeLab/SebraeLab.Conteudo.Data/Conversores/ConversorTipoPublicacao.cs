using System;
using System.Linq;

using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SebraeLab.Conteudo.Domain.Enums;

namespace SebraeLab.Conteudo.Data
{
    public class ConversorTipoPublicacao: ValueConverter<TipoPublicacao, string>
    {
        public ConversorTipoPublicacao() : base(
            p=>ConverterParaOhBancoDeDados(p),
            value => ConverterParaAplicacao(value),
            new ConverterMappingHints(1))
        {
            
        }

        static string ConverterParaOhBancoDeDados(TipoPublicacao status)
        {
            return  status.ToString()[0..2].ToUpper();
        }

        static TipoPublicacao ConverterParaAplicacao(string value)
        {
            var tipo = Enum
                .GetValues<TipoPublicacao>()
                .FirstOrDefault(p=>p.ToString()[0..2].ToUpper() == value.ToUpper());   
           

            return tipo;
        }
    }
}