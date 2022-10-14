using SebraeLab.Conteudo.Domain;
using SebraeLab.Conteudo.Domain.Enums;
using SebraeLab.Core.Data;

namespace SebraeLab.Conteudo.Data.Repository
{
    public interface IConteudoSebraeLabRepository : IRepository<ConteudoSebraeLab>
    {
        Task<List<ConteudoSebraeLab>> GetAll(bool onlypublished = false);
        Task<List<ConteudoSebraeLab>> Search(string value);
        Task<ConteudoSebraeLab> GetById(Guid id);
        Task<List<ConteudoSebraeLab>> GetByTipo(TipoPublicacao tipo);
        void Add(ConteudoSebraeLab conteudo);
        void Update(ConteudoSebraeLab conteudo);
        void Remove(ConteudoSebraeLab conteudo);
    }
}
