using SebraeLab.Toten.App.ViewModels;

namespace SebraeLab.Toten.App.Services
{
    public interface IFeedbackUsuarioService
    {
        Task<bool> Add(FeedbackUsuarioViewModel feedbackUsuarioViewModel);
    }
}