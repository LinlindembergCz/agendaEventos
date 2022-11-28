using SebraeLab.Toten.App.Validator;
using SebraeLab.Toten.Domain.Enum;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace SebraeLab.Toten.App.ViewModels
{
    public class FeedbackUsuarioViewModel
    {
        [Key]
        //public Guid? Id { get; set; }

        [JsonPropertyName("nome")]
        public string? NomeUsuario { get; set; }
        [JsonPropertyName("email")]
        public string? EmailUsuario { get; set; }
        [JsonPropertyName("cpf")]
        public string? CPFUsuario { get; set; }
        [JsonPropertyName("tipo")]
        public string TipoVisita { get; set; }

        [JsonPropertyName("telefone")]
        public string Telefone { get; set; }
        [JsonPropertyName("idevento")]
        public Guid? IdEvento { get; set; }
        [JsonPropertyName("dateTime")]
        public DateTime DateTime { get; set; }

        [JsonPropertyName("outromotivo")]
        public string? OutroMotivo { get; private set; }

        [JsonPropertyName("aceitelgpd")]
        public bool AceiteLGPD { get; private set; }

        public FeedbackUsuarioViewModel()
        {
            DateTime = DateTime.Now;
        }
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