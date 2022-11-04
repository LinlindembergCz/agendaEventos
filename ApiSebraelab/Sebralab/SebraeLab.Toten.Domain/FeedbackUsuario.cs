using SebraeLab.Toten.Domain.Enum;

namespace SebraeLab.Toten.Domain
{
    public class FeedbackUsuario
    {
        public Guid? Id { get; set; }
        public string? NomeUsuario { get; set; }
        public string? EmailUsuario { get; set; }
        public string? CPFUsuario { get; set; }
        public TipoEventoEnum TipoVisita { get; set; }
        public MesEnum Nascimento { get; set; }
        public Guid? IdEvento { get; set; }
        public DateTime DateTime { get; set; }
    }
}