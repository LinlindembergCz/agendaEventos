using FluentValidation;
using SebraeLab.Evento.App.ViewModels;

namespace SebraeLab.Evento.App.Validator
{
    public class ValidatorEventoSebraeLab : AbstractValidator<EventoSebraeLabViewModel>
    {
        public ValidatorEventoSebraeLab()
        {
            RuleFor(c => c.Dias)
              .NotEmpty()
              .NotNull()
              .WithMessage("Nenhuma data foi infomada!");

            RuleFor(c => c.Titulo)
               .NotEqual(String.Empty)
               .NotNull()
               .WithMessage("Título do evento é requerido!");

             RuleFor(c => c.Descricaoevento)
              .NotEqual(String.Empty)
              .NotNull()

              .WithMessage("Descrição do evento é requerido!");

             RuleFor(c => c.Tipoevento)
              .NotEqual(String.Empty)
              .WithMessage("Tipo do evento é requerido!");

             RuleFor(c => c.Nomecompleto)
              .NotEqual(String.Empty)
              .NotNull()
              .WithMessage("Nome completo do organizador do evento é requerido!");

             RuleFor(c => c.Email)
              .NotEqual(String.Empty)
              .NotNull()
              .EmailAddress()
              .WithMessage("Deve ser informado um E-mail válido!");

             RuleFor(c => c.Contato)
             .NotEqual(String.Empty)
             .NotNull()
             .WithMessage("Contato do organizador do evento é requerido!");

            RuleFor(c => c.Instituicao)
               .NotEqual(String.Empty)
               .NotNull()
               .WithMessage("Instituição do evento é requerido!");

            RuleFor(c => c.Numeroparticipantes)
                .NotNull()
                .InclusiveBetween(1, 50)
              .WithMessage("O Número de participantes do evento deve ser > 0 e <= 50!");
          
            
        }
    }
}
