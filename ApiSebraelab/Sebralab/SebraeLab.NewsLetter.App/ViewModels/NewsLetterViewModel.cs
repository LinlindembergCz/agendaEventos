using System.ComponentModel.DataAnnotations;
using SebraeLab.NewsLetter.App.Validator;


namespace SebraeLab.NewsLetter.App.ViewModels
{
    public class NewsLetterViewModel
    {
        [Key]
        public Guid? Id { get; set; }
        public string? Nome { get; set; }
        public string? Sobrenome { get;  set; }
        public string? Email { get;  set; }
        public string? Telefone { get;  set; }
        public string? Cpf { get;  set; }
        public string? Cnpj { get;  set; }
        public bool? Aceitotermos { get;  set; }
        public bool? Aceitoreceber { get;  set; }

        public NewsLetterViewModel() 
        {
          
        }

        public bool EhValido()
        {
            /*  var validator = new ValidatorEventoSebraeLab();
              var validResult = validator.Validate(this);
              if (!validResult.IsValid)
              {
                  throw new Exception(validResult.ToString(","));
                  return false;
              }
              */
            return true;

        }
    }
    
}