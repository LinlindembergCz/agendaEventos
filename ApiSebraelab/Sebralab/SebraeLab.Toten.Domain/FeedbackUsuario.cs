using SebraeLab.Core.DomainObjects;
using SebraeLab.Toten.Domain.Enum;

namespace SebraeLab.Toten.Domain
{
    public class FeedbackUsuario : Entity
    {
        public string? NomeUsuario { get; private set; }
        public string? EmailUsuario { get; private set; }
        public string? CPFUsuario { get; private set; }
        public TipoEventoEnum TipoVisita { get; private set; }
        public string? Telefone { get; private set; }
        public string? IdEvento { get; private set; }
        public DateTime DateTime { get; private set; }

        public FeedbackUsuario()
        { }
        public FeedbackUsuario(
              string nomeusuario,
              string emailusuario,
              string cpfsuario,
              TipoEventoEnum tipovisita,
              string telefone,
              string idevento,
              DateTime datetime)
        {
            NomeUsuario = nomeusuario;
            EmailUsuario = emailusuario;
            CPFUsuario = cpfsuario;
            TipoVisita = tipovisita;
            Telefone = telefone;
            IdEvento = idevento;
            DateTime = datetime;
        }
    }
}