using SebraeLab.Core.DomainObjects;

namespace Sebraelab.Usuario.Domain
{
    public class Usuario : Entity
    {
        public string? Login { get; set; }
        public string? Senha { get;  set; }
    }
}