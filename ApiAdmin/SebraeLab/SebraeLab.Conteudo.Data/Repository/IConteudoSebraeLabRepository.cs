using SebraeLab.Conteudo.Domain;
using SebraeLab.Conteudo.Domain.Enums;
using SebraeLab.Core.Data;

namespace SebraeLab.Conteudo.Data.Repository
{
    public interface IConteudoSebraeLabRepository : IRepository<ConteudoSebraeLab>
    {
        Task<List<ConteudoSebraeLab>> GetAll(bool onlypublished = false);
        Task<List<ConteudoSebraeLab>> Search(string value, bool onlypublished = false);
        Task<ConteudoSebraeLab> GetById(Guid id);
        Task<List<ConteudoSebraeLab>> GetByTipo(TipoPublicacao tipo, bool onlypublished = false);
        void Add(ConteudoSebraeLab conteudo);
        void Update(ConteudoSebraeLab conteudo);
        void Remove(ConteudoSebraeLab conteudo);
    }
}
