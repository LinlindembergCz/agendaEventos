using AutoMapper;
using SebraeLab.Toten.App.ViewModels;
using SebraeLab.Toten.Data.Repository;
using SebraeLab.Toten.Domain;

namespace SebraeLab.Toten.App.Services
{
    public class FeedbackUsuarioService : IFeedbackUsuarioService
    {
        private readonly IFeedbackUsuarioRepository _repository;
        private readonly IMapper _mapper;
        public FeedbackUsuarioService(IFeedbackUsuarioRepository repository,
                                         IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<bool> Add(FeedbackUsuarioViewModel feedbackUsuarioViewModel)
        {
            if (feedbackUsuarioViewModel.EhValido())
            {
                var feedbackUsuario = _mapper.Map<FeedbackUsuario>(feedbackUsuarioViewModel);
                _repository.Add(feedbackUsuario);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}




