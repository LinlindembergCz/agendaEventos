using Microsoft.EntityFrameworkCore;
using SebraeLab.Conteudo.Domain;
using SebraeLab.Conteudo.Data;
using SebraeLab.Core.Data;

namespace SebraeLab.Conteudo.Data.Repository
{
    public class ConteudoSebraeLabRepository : IConteudoSebraeLabRepository
    {
        private readonly ConteudoSebraeLabContext _context;

        public ConteudoSebraeLabRepository(ConteudoSebraeLabContext context)
        {
            _context = context;
        }
        public IUnitOfWork UnitOfWork => _context;

        public async Task<List<ConteudoSebraeLab>> GetAll()
        {
            return await _context.Conteudos.AsNoTracking().ToListAsync();
        }
        
        //public async Task<IEnumerable<EventoSebraeLab>> GetById(Guid id)
        public async Task<ConteudoSebraeLab> GetById(Guid id)
        {
            return await _context.Conteudos.AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
            //.Where(p => p.Id == id).ToListAsync();
            //FirstOrDefaultAsync(p => p.Id == id);

            //return await _context.Pedidos.AsNoTracking().Where(p => p.ClienteId == clienteId).ToListAsync();
            //return await _context.Produtos.FindAsync(id);
        }

        public void Add(ConteudoSebraeLab conteudo)
        {
            _context.Conteudos.Add(conteudo);
        }

        public void Update(ConteudoSebraeLab conteudo)
        {
            _context.Conteudos.Update(conteudo);
        }

        public void Remove(ConteudoSebraeLab conteudo)
        {
            _context.Conteudos.Remove(conteudo);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}