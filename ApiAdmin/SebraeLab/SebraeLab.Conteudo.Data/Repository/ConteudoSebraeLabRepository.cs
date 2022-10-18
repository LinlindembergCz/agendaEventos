using Microsoft.EntityFrameworkCore;
using SebraeLab.Conteudo.Domain;
using SebraeLab.Core.Data;
using SebraeLab.Conteudo.Domain.Enums;

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

        public async Task<List<ConteudoSebraeLab>> GetAll(bool onlypublished = false)
        {
           return await _context.Conteudos.
                        Where(e => (onlypublished ? e.Status == StatusConteudo.Publicado : true)
                                   && (e.Ativo==true) ).AsNoTracking().ToListAsync();
        }

        public async Task<List<ConteudoSebraeLab>> Search(string value, bool onlypublished = false)
        {
            return await _context.Conteudos.Where(c=> ( c.Descricao.Contains(value) || c.Titulo.Contains(value)) && 
                                                        (c.Ativo == true) &&
                                                        (onlypublished ? c.Status == StatusConteudo.Publicado : true)
                                                      )
                .AsNoTracking().ToListAsync();
        }

        public async Task<ConteudoSebraeLab> GetById(Guid id)
        {
            return await _context.Conteudos.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<List<ConteudoSebraeLab>> GetByTipo(TipoPublicacao tipo, bool onlypublished = false)
        {
            return await _context.Conteudos.Where(p => (onlypublished ? p.Status == StatusConteudo.Publicado : true) && 
                                                       (p.Tipopublicacao == tipo) && 
                                                       (p.Ativo == true) ).AsNoTracking().ToListAsync();

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