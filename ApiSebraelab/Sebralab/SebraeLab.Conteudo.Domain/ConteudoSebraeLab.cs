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
        
        public StatusConteudo? Status { get; private set; }
        public string? Legenda { get; private set; }

        [Column(TypeName = "nvarchar(2)")]
        public TipoPublicacao Tipopublicacao { get; private set; }
        public DateTime Datacadastro { get; private set; }
        public DateTime? Datapublicacao { get; private set; }
        public bool? Ativo { get; private set; }

        public bool? Personalizadodesativado { get; private set; }
        public string? Titulochamada { get; private set; }
        public string? Titulobotao { get; private set; }
        public string? Linkredirecionamento { get; private set; }
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
                      TipoPublicacao tipopublicacao,
                      bool? ativo,
                      string? titulochamada,
                      string? titulobotao,
                      string? linkredirecionamento



        )
        {
            Titulo = titulo;
            Subtitulo = subtitulo;
            Descricao = descricao;
            Personalizadodesativado = personalizadodesativado;
            Status = status;
            Legenda = legenda;
            Tipopublicacao = tipopublicacao;
            Ativo = ativo;
            Titulochamada = titulochamada;
            Titulobotao = titulobotao;
            Linkredirecionamento = linkredirecionamento;
        }

        public void Publish()
        {
            Status = StatusConteudo.Publicado;
            Datapublicacao = DateTime.Now;
        }

        public void Inativar()
        {
            Ativo = false;
        }

        public void Ativar()
        {
            Ativo = true;
        }

    }
}