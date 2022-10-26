using Microsoft.EntityFrameworkCore;
using SebraeLab.Core.Data;

using SebraeLab.Bloqueio.Domain;

namespace SebraeLab.Bloqueio.Data.Repository
{
    public class BloqueadorRepository : IBloqueadorRepository
    {
        private readonly BloqueadorContext _context;

        public BloqueadorRepository(BloqueadorContext context)
        {
           _context = context;
        }
        public IUnitOfWork UnitOfWork => _context;

        public async Task<List<Bloqueador>> GetAll()
        {
           return await _context.Bloqueio.Include(e => e.Dias.OrderBy(d=>d.Data)).AsNoTracking().ToListAsync();
        }
        public async  Task<List<DiaBloqueado>> GetAllDiasBloqueado()
        {
            return await _context.Dias.AsNoTracking().ToListAsync();
        }
        public void Add(Bloqueador bloqueio)
        {
            
            _context.Bloqueio.Add(bloqueio);
        }
        public void Update(Bloqueador bloqueio)
        {
          /*  bloqueio.Dias.ForEach(d =>
            {
                if (d.Id != null)
                    _context.Dias.Remove(d);
            });    */       

            _context.Bloqueio.Update(bloqueio);
        }

        public void Remove(Bloqueador bloqueio)
        {
            _context.Bloqueio.Remove(bloqueio);
        }
        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}