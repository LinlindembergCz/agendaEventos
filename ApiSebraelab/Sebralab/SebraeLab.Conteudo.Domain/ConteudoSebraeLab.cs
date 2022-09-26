using System;
using System.ComponentModel.DataAnnotations.Schema;
using SebraeLab.Conteudo.Domain.Enums;
using SebraeLab.Core.DomainObjects;

namespace SebraeLab.Conteudo.Domain
{

    public class ConteudoSebraeLab : Entity
    {
        public string? Titulo { get; private set; }
        public string? Subtitulo { get; private set; }
        public string? Descricao { get; private set; }
        public bool? Personalizadodesativado { get; private set; }
        public StatusConteudo? Status { get; private set; }
        public string? Legenda { get; private set; }

        [Column(TypeName = "nvarchar(2)")]
        public TipoPublicacao Tipopublicacao { get; private set; }
        public DateTime DataCadastro { get; private set; }

        public ConteudoSebraeLab()
        {

        }

        public ConteudoSebraeLab(
                      string titulo,
                      string subtitulo,
                      string descricao,
                      bool personalizadodesativado,
                      StatusConteudo status,
                      string legenda,
                      TipoPublicacao tipopublicacao
        )
        {
            Titulo = titulo;
            Subtitulo = subtitulo;
            Descricao = descricao;
            Personalizadodesativado = personalizadodesativado;
            Status = status;
            Legenda = legenda;
            Tipopublicacao = tipopublicacao;
        }

    }
}