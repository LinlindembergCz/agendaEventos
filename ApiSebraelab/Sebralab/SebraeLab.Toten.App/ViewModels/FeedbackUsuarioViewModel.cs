using SebraeLab.Toten.App.Validator;
using SebraeLab.Toten.Domain.Enum;
using System.ComponentModel.DataAnnotations;

namespace SebraeLab.Toten.App.ViewModels
{
    public class FeedbackUsuarioViewModel
    {
        public FeedbackUsuarioViewModel()
        {
            DateTime = DateTime.Now;
        }

        [Key]
        public Guid? Id { get; set; }
        public string? NomeUsuario { get; set; }
        public string? EmailUsuario { get; set; }
        public string? CPFUsuario { get; set; }
        public TipoEventoEnum TipoVisita { get; set; }
        public MesEnum Nascimento { get; set; }
        public Guid? IdEvento { get; set; }
        public DateTime DateTime { get; set; }


        public bool EhValido()
        {
            var validator = new ValidatorFeedbackUsuario();
            var validResult = validator.Validate(this);
            if (!validResult.IsValid)
            {
                throw new Exception(validResult.ToString(","));
                return false;
            }
            return true;

        }
    }
}