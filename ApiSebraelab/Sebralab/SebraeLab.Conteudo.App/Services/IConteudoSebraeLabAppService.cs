using Microsoft.AspNetCore.Mvc;
using SebraeLab.Conteudo.App.ViewModels;
using SebraeLab.Conteudo.Domain.Enums;
using SebraeLab.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SebraeLab.Conteudo.App.Services
{
    public interface IConteudoSebraeLabAppService : IDisposable
    {
        Task<List<ConteudoSebraeLabViewModel>> GetAll(bool onlypublished = false);
        Task<List<ConteudoSebraeLabViewModel>> Search(string value, bool onlypublished = false);
        Task<ConteudoSebraeLabViewModel> GetById(Guid id);
        Task<List<ConteudoSebraeLabViewModel>> GetByTipo(TipoPublicacao tipo, bool onlypublished = false);        

        Task<bool> Add(ConteudoSebraeLabViewModel conteudoebraelabViewModel);
        Task<bool> Update(ConteudoSebraeLabViewModel conteudoebraelabViewModel);
        Task<bool> Remove(Guid id);
        Task<bool> Inactive(Guid id);
        Task<bool> Active(Guid id);
        Task<bool> Publish(Guid id);


    }
}


