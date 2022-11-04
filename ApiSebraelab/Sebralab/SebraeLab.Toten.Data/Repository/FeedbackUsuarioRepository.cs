using SebraeLab.Toten.Domain;

namespace SebraeLab.Toten.Data.Repository
{
    public class FeedbackUsuarioRepository : IFeedbackUsuarioRepository
    {
        private readonly FeedbackUsuarioContext _context;

        public FeedbackUsuarioRepository(FeedbackUsuarioContext context)
        {
            _context = context;
        }
  
        public void Add(FeedbackUsuario user)
        {
            _context.FeedbackUsuario.Add(user);
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
