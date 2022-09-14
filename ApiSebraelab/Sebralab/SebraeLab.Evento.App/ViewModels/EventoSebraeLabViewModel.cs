using SebraeLab.Evento.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SebraeLab.Evento.App.ViewModels
{
    public class TipoEvento
    {
        public string code { get; set; }
        public string name { get; set; }
    }
    public class EventoSebraeLabViewModel
    {
        [Key]
        //public Guid Id { get; set; }
        public string Titulo { get; set; } 
        public int Numeroparticipantes { get;  set; }
        public string Tipoevento { get;  set; } 
        public string Linksparainscricao { get;  set; } 
        public string Descricaoevento { get;  set; }         
        public string Nomecompleto { get;  set; } 
        public string Email { get;  set; } 
        public string Instituicao { get;  set; } 
        public string Contato { get;  set; }
        public bool Imagempersonalida { get;  set; }
        public bool Publicaosite { get;  set; }

        public List<DiaEventoSebraeLab>? Dias { get; set; }


        public EventoSebraeLabViewModel() {

            Dias = new List<DiaEventoSebraeLab>();
        }
    }
}