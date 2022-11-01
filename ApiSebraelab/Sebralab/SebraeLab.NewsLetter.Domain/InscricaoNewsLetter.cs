using System;
using System.ComponentModel.DataAnnotations.Schema;
using SebraeLab.Core.DomainObjects;

namespace SebraeLab.NewsLetter.Domain
{
    [Table("NewsLetter")]
    public class InscricaoNewsLetter : Entity
    {
        public string? Nome { get; private set; }
        public string? Sobrenome { get; private set; }
        public string? Email { get; private set; }
        public string? Telefone { get; private set; }
        public string? Cpf { get; private set; }
        public string? Cnpj { get; private set; }
        public bool? Aceitotermos { get; private set; }
        public bool? Aceitoreceber { get; private set; }
        

        public InscricaoNewsLetter(
            string? nome ,
            string? sobrenome,
            string? email ,
            string? telefone,            
            string? cpf ,
            string? cnpj ,
            bool? aceitotermos,
            bool? aceitoreceber            
            )
        {
            Nome = nome;
            Email = email;
            Cpf = cpf;
            Cnpj = cnpj;
            Aceitotermos = aceitotermos;
            Aceitoreceber = aceitoreceber;
            Sobrenome = sobrenome;
            Telefone = telefone;
    }

    }
}