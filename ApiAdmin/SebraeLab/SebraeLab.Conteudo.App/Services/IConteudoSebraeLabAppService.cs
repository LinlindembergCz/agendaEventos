﻿using Microsoft.AspNetCore.Mvc;
using SebraeLab.Conteudo.App.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SebraeLab.Conteudo.App.Services
{
    public interface IConteudoSebraeLabAppService : IDisposable
    {
        Task<List<ConteudoSebraeLabViewModel>> GetAll();
        Task<ConteudoSebraeLabViewModel> GetById(Guid id);

        Task<bool> Add(ConteudoSebraeLabViewModel conteudoebraelabViewModel);
        Task<bool> Update(ConteudoSebraeLabViewModel conteudoebraelabViewModel);



    }
}
