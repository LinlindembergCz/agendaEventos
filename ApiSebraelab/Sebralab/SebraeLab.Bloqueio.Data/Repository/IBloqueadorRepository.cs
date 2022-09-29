using SebraeLab.Bloqueio.Domain;
using SebraeLab.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SebraeLab.Bloqueio.Data.Repository
{
    public interface IBloqueadorRepository : IRepository<Bloqueador>
    {
        Task<List<Bloqueador>> GetAll();
        Task<List<DiaBloqueado>> GetAllDiasBloqueado();
        void Add(Bloqueador bloqueio);
        void Update(Bloqueador bloqueio);
 
    }
}
