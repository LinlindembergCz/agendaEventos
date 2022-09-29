using System;
using SebraeLab.Core.DomainObjects;

namespace SebraeLab.Evento.Domain
{

    public class EventoSebraeLab : Entity
    {
        public string? Titulo { get; private set; } 
        public int? Numeroparticipantes { get; private set; }
        public  string? Tipoevento { get; private set; }
        public string? Linksparainscricao { get; private set; }
        public string? Descricaoevento { get; private set; }
        public List<DiaEventoSebraeLab>? Dias { get; private set; }
        public string? Nomecompleto { get; private set; }
        public string? Email { get; private set; }
        public string? Instituicao { get; private set; }
        public string? Contato { get; private set; }
        public bool? Imagempersonalida { get; private set; }
        public bool? Publicaosite { get; private set; }
        public string? Status { get; private set; }
        public DateTime Datacadastro { get; private set; }

        public EventoSebraeLab()
        {
            Dias = new List<DiaEventoSebraeLab>();
        }

        public EventoSebraeLab(
                      string titulo ,
                      int numeroparticipantes,
                      string tipoevento,
                      string linksparainscricao ,
                      string descricaoevento,
                      string nomecompleto,
                      string email,
                      string instituicao ,
                      string contato,
                      bool imagempersonalida ,
                      bool publicaosite,
                      string status
        )
        {
           Titulo = titulo;
           Numeroparticipantes = numeroparticipantes;
           Linksparainscricao= linksparainscricao;
           Descricaoevento =  descricaoevento;
           Nomecompleto = nomecompleto;
           Email = email;
           Instituicao = instituicao;
           Contato = contato;
           Imagempersonalida = imagempersonalida;
           Publicaosite = publicaosite;
           Tipoevento = tipoevento;
           Status = status;
        }



    }
}