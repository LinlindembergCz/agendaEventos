﻿using System;
using SebraeLab.Core.DomainObjects;

namespace SebraeLab.Evento.Domain
{
    public class EventoSebraeLab : Entity
    {
        public string Titulo { get; private set; }
        public int Numeroparticipantes { get; private set; }
        public  string Tipoevento { get; private set; }
        public string Linksparainscricao { get; private set; }
        public string Descricaoevento { get; private set; }

        private readonly List<DiaEventoSebraeLab> _dias;
        public IReadOnlyCollection<DiaEventoSebraeLab> Dias => _dias;

        public string Nomecompleto { get; private set; }
        public string Email { get; private set; }
        public string Instituicao { get; private set; }
        public string Contato { get; private set; }

        public bool Imagempersonalida { get; private set; }
        public bool Publicaosite { get; private set; }

        protected EventoSebraeLab()
        {
            _dias = new List<DiaEventoSebraeLab>();
        }

        public EventoSebraeLab(string titulo ,
                      int numeroparticipantes,
                      string tipoevento,
                      string linksparainscricao ,
                      string descricaoevento,
                      string nomecompleto,
                      string email,
                      string instituicao ,
                      string contato,
                      bool imagempersonalida ,
                      bool publicaosite
        )
        {
           Titulo = titulo;
           Numeroparticipantes = numeroparticipantes;
           Tipoevento = tipoevento;
           Linksparainscricao= linksparainscricao;
           Descricaoevento =  descricaoevento;
           Nomecompleto = nomecompleto;
           Email = email;
           Instituicao = instituicao;
           Contato = contato;
           Imagempersonalida = imagempersonalida;
           Publicaosite = publicaosite;
        }

    }
}