using FluentValidation;
using SebraeLab.NewsLetter.App.ViewModels;
using SebraeLab.NewsLetter.App.ViewModels;

namespace SebraeLab.NewsLetter.App.Validator
{
    public class ValidatorNewsLetterSebraeLab : AbstractValidator<NewsLetterViewModel>
    {
        public ValidatorNewsLetterSebraeLab()
        {


            RuleFor(c => c.Nome)
               .NotEqual(String.Empty)
               .NotNull()
               .WithMessage("Nome é requerido!");

         
            
        }
    }
}
