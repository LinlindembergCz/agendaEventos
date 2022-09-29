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

        public async Task<List<EventoSebraeLab>> GetAll()
        {
            return await _context.Eventos.Include(e => e.Dias.OrderBy( o=>o.Data) ).AsNoTracking().ToListAsync();
        }

        //public async Task<IEnumerable<EventoSebraeLab>> GetById(Guid id)
        public async Task<EventoSebraeLab> GetById(Guid id)
        {
            return await _context.Eventos.Include(e => e.Dias.OrderBy(o => o.Data)).AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
            //.Where(p => p.Id == id).ToListAsync();
            //FirstOrDefaultAsync(p => p.Id == id);

            //return await _context.Pedidos.AsNoTracking().Where(p => p.ClienteId == clienteId).ToListAsync();
            //return await _context.Produtos.FindAsync(id);
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