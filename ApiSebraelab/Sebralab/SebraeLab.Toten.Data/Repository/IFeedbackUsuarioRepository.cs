using SebraeLab.Core.Data;
using SebraeLab.Toten.Domain;

namespace SebraeLab.Toten.Data.Repository
{
    public interface IFeedbackUsuarioRepository
    {
        void Add(FeedbackUsuario evento);
    }
}