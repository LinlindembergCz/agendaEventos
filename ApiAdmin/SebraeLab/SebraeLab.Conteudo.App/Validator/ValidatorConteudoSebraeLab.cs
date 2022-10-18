using FluentValidation;
using SebraeLab.Conteudo.App.ViewModels;

namespace SebraeLab.Conteudo.App.Validator
{
    public class ValidatorConteudoSebraeLab : AbstractValidator<ConteudoSebraeLabViewModel>
    {
        public ValidatorConteudoSebraeLab()
        {
            RuleFor(c => c.Tipopublicacao)
            .NotEqual(String.Empty)
            .NotNull()
            .WithMessage("Tipo do conteúdo é requerido!");

            RuleFor(c => c.Titulo)
               .NotEqual(String.Empty)
               .NotNull()
               .WithMessage("Titulo do conteúdo é requerido!");

            RuleFor(c => c.Subtitulo)
               .NotEqual(String.Empty)
               .NotNull()
               .WithMessage("Subtitulo do conteúdo é requerido!");

            RuleFor(c => c.Descricao)
              .NotEqual(String.Empty)
              .NotNull()
              .WithMessage("Descrição do conteúdo é requerido!");            
        }
    }
}
