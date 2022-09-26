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
        public string Titulo { get; set; }
        public string Subtitulo { get; set; }
        public string Descricao { get; set; }
        public bool Personalizadodesativado { get; set; }
        public string? Status { get; set; }        
        public string? Legenda { get; set; }
        public string? Tipopublicacao { get; set; }

        public ConteudoSebraeLabViewModel() {

           }
    }
}