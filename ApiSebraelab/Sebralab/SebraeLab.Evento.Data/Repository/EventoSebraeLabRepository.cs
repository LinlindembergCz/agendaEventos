using Microsoft.EntityFrameworkCore;
using SebraeLab.Evento.Domain;
using SebraeLab.Evento.Data;
using SebraeLab.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using SebraeLab.Bloqueio.Domain;
using SebraeLab.Evento.Domain.Enums;
using Newtonsoft.Json.Linq;
using System.Data.Common;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace SebraeLab.Evento.Data.Repository
{
    public class EventoSebraeLabRepository : IEventoSebraeLabRepository
    {
        private readonly EventoSebraeLabContext _context;

        public EventoSebraeLabRepository(EventoSebraeLabContext context)
        {
            _context = context;
        }
        public IUnitOfWork UnitOfWork => _context;

        public async Task<List<EventoSebraeLab>> GetAll(bool onlypublished = false)
        {
            return await _context.Eventos.
                Include(e => e.Dias).
                Where(e=> onlypublished? e.Status== StatusEvento.Publicado && e.Publicaosite==true : true ).
                AsNoTracking().
                ToListAsync();
        }


        public async Task<List<EventoSebraeLab>> Search(string value, bool onlypublished = false)
        {
            return await _context.Eventos.
                Include(e => e.Dias).
                Where(c => ( c.Descricaoevento.Contains(value) || c.Titulo.Contains(value) ) &&
                            (onlypublished ? c.Status == StatusEvento.Publicado && c.Publicaosite == true : true )
                )
                .AsNoTracking().ToListAsync();
        }

        public async  Task<bool> Available(string? Data, string? horainicio, string horafinal, string id)
        {
            var con = _context.Database.GetDbConnection();
            try
            {              
                con.Open();
                var cmd = con.CreateCommand();

                Data = DateTime.Parse(Data).ToString("yyyy/MM/dd");

                string Datainicial = Data + " 00:00:00";
                string Datafinal = Data + " 23:59:59";
                string HoraInicial = Data + " " + horainicio;
                string HoraFinal = Data + " " + horafinal;

                cmd.CommandText = "Select count(*) from DiasEventoSebraeLab d" +
                $" where ( cast(d.Eventoid as varchar(50) )  <> '{id}' ) and " +
                $" ( d.Data >= '{Datainicial}' and d.Data <= '{Datafinal}') and " +
                $" ( ('{HoraInicial}' >= '{Data}' + ' ' + d.Horainicio and '{HoraInicial}' <= '{Data}'+ ' '+ d.Horafim ) OR " +
                $"   ('{HoraFinal}'   >= '{Data}' + ' ' + d.Horainicio and '{HoraInicial}' <= '{Data}'+ ' '+ d.Horafim ) )";

                DbDataReader rdr = await cmd.ExecuteReaderAsync(CommandBehavior.SequentialAccess);
                await rdr.ReadAsync();
                return rdr.GetInt32(0) == 0;
            }
            finally
            {
                con.Close();
            }


        }
        public async Task<EventoSebraeLab> GetById(Guid id)
        {
            return await _context.Eventos.Include(e => e.Dias).AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
        }

        public void Add(EventoSebraeLab evento)
        {
            _context.Eventos.Add(evento);
        }


        public void Update(EventoSebraeLab evento)
        {
            _context.Eventos.Update(evento);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}