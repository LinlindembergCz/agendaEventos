using System.Threading.Tasks;

namespace SebraeLab.Core.Data
{
    public interface IUnitOfWork
    {
        Task<bool> Commit();
    }
}