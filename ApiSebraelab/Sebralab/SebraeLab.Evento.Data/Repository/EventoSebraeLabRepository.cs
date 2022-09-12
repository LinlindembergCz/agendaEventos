using Microsoft.EntityFrameworkCore;
using SebraeLab.Evento.Domain;
using SebraeLab.Evento.Data;
using SebraeLab.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public async Task<IEnumerable<EventoSebraeLab>> ObterTodos()
        {
            return await _context.Eventos.AsNoTracking().ToListAsync();
        }

        public async Task<EventoSebraeLab> ObterPorId(Guid id)
        {
            return await _context.Eventos.AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
            //return await _context.Produtos.FindAsync(id);
        }

        public void Adicionar(EventoSebraeLab evento)
        {
            _context.Eventos.Add(evento);
        }

        public void Atualizar(EventoSebraeLab produto)
        {
            _context.Eventos.Update(produto);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}