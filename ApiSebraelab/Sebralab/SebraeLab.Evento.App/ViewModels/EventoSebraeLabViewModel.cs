using SebraeLab.Evento.Domain;
using System.ComponentModel.DataAnnotations;
using SebraeLab.Evento.App.Validator;


namespace SebraeLab.Evento.App.ViewModels
{
    public class EventoSebraeLabViewModel
    {
        [Key]
        public Guid? Id { get; set; }
        public string? Titulo { get; set; }
        public string? Subtitulo { get; set; }
        public int? Numeroparticipantes { get;  set; }
        public string? Tipoevento { get;  set; } 
        public string? Linksparainscricao { get;  set; } 
        public string? Descricaoevento { get;  set; }         
        public string? Nomecompleto { get;  set; } 
        public string? Email { get;  set; } 
        public string? Instituicao { get;  set; } 
        public string? Contato { get;  set; }
        public bool Imagempersonalida { get;  set; }
        public bool Publicaosite { get;  set; }
        public List<DiaEventoSebraeLab>? Dias { get; set; }
        public string? Status { get; set; }
        public EventoSebraeLabViewModel() {

            Dias = new List<DiaEventoSebraeLab>();
        }

        public bool EhValido()
        {
            var validator = new ValidatorEventoSebraeLab();
            var validResult = validator.Validate(this);
            if (!validResult.IsValid)
            {
                throw new Exception(validResult.ToString(","));
                return false;
                //validRes.Errors.FirstOrDefault();
                //validRes.Errors.FirstOrDefault().ErrorMessage);  
                ////all error messages  
                //validRes.ToString(",");  
                //string.Join(",", validRes.Errors.Select(x => x.ErrorMessage));  
                //string.Join(",", validRes.Errors);  
            }
            return true;

        }
    }
    
}