using SebraeLab.Conteudo.App.Validator;
using SebraeLab.Conteudo.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SebraeLab.Conteudo.App.ViewModels
{
    public class ConteudoSebraeLabViewModel
    {
        [Key]
        public Guid? Id { get; set; }
        public string? Titulo { get; set; }
        public string? Subtitulo { get; set; }
        public string? Descricao { get; set; }
        public bool Personalizadoativado { get; set; }
        public string? Status { get; set; }        
        public string? Legenda { get; set; }
        public string? Tipopublicacao { get; set; }
        public bool? Ativo { get; set; }
        public string? Titulochamada { get; set; }
        public string? Titulobotao { get; set; }
        public string? Linkredirecionamento { get; set; }

        public ConteudoSebraeLabViewModel() {

           }

        public bool EhValido()
        {
            var validator = new ValidatorConteudoSebraeLab();
            var validResult = validator.Validate(this);
            if (!validResult.IsValid)
            {
                throw new Exception(validResult.ToString(","));
                return false;
            }
            return true;

        }
    }
}