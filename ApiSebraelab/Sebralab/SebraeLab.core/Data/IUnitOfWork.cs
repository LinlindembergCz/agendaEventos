using System.Threading.Tasks;

namespace SebraeLab.Core.Data
{
    public interface IUnitOfWork
    {
        void HealthCheckDB();
        bool Commit();
    }
}