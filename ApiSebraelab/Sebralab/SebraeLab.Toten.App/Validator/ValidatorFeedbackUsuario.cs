using FluentValidation;
using SebraeLab.Toten.App.ViewModels;

namespace SebraeLab.Toten.App.Validator
{
    public class ValidatorFeedbackUsuario : AbstractValidator<FeedbackUsuarioViewModel>
    {
        public ValidatorFeedbackUsuario()
        {
            RuleFor(c => c.CPFUsuario)
              .NotEmpty()
              .NotNull()
              .WithMessage("Nenhum CPF foi infomado!");

            RuleFor(c => c.TipoVisita)
               .NotEmpty()
               .NotNull()
               .WithMessage("Por favor, informe sua participação");

            RuleFor(c => c.Telefone)
               .NotEmpty()
               .NotNull()
               .WithMessage("Por favor, informe o telefone");

            RuleFor(c => c.EmailUsuario)
             .NotEqual(String.Empty)
             .NotNull()
             .EmailAddress()
             .WithMessage("Deve ser informado um E-mail válido!");

            RuleFor(c => c.NomeUsuario)
             .NotEqual(String.Empty)
             .NotNull()
             .WithMessage("Insira seu nome");

            RuleFor(c => c.IdEvento)
             .NotEmpty()
             .NotNull()
             .WithMessage("Escolha um Evento");
        }
    }
}
