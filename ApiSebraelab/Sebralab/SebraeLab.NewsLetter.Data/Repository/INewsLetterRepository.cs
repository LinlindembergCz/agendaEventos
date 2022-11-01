using SebraeLab.Core.Data;
using SebraeLab.NewsLetter.Domain;

namespace SebraeLab.NewsLetter.Data.Repository
{
    public interface INewsLetterRepository : IRepository<InscricaoNewsLetter>
    {
        Task<List<InscricaoNewsLetter>> GetAll();      
        Task<InscricaoNewsLetter> GetById(Guid id);
      void Add(InscricaoNewsLetter inscricao);
        void Update(InscricaoNewsLetter inscricao);
    }
}
