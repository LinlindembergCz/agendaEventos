using SebraeLab.Bloqueio.Domain;
using System.ComponentModel.DataAnnotations;

namespace SebraeLab.Blqoueio.App.ViewModels
{
    public class BloqueadorViewModel
    {
        [Key]
        public Guid? Id { get; set; }       
        public string Motivo { get; set; }
        public List<DiaBloqueado>? Dias { get; set; }
        public BloqueadorViewModel() {

            Dias = new List<DiaBloqueado>();
        }
    }
}