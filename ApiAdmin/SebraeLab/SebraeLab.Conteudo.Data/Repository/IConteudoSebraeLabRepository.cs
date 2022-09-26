using SebraeLab.Conteudo.Domain;
using SebraeLab.Core.Data;

namespace SebraeLab.Conteudo.Data.Repository
{
    public interface IConteudoSebraeLabRepository : IRepository<ConteudoSebraeLab>
    {
        Task<List<ConteudoSebraeLab>> GetAll();        
        Task<ConteudoSebraeLab> GetById(Guid id);        
        void Add(ConteudoSebraeLab conteudo);
        void Update(ConteudoSebraeLab conteudo);
    }
}
