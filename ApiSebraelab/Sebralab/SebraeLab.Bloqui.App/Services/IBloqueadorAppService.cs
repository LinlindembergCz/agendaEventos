using SebraeLab.Bloqueio.Domain;
using SebraeLab.Blqoueio.App.ViewModels;

namespace SebraeLab.Bloqueio.App.Services
{
    public interface IBloqueadorAppService : IDisposable
    {
        Task<List<BloqueadorViewModel>> GetAll();

        Task<List<DiaBloqueado>> GetAllDiasBloqueado();
        Task<bool> Add(BloqueadorViewModel eventosebraelabViewModel);
        Task<bool> Update(BloqueadorViewModel eventosebraelabViewModel);
  
    }
}
