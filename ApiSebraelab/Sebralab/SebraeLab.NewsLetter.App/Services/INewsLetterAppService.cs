using Microsoft.AspNetCore.Mvc;
using SebraeLab.NewsLetter.App.ViewModels;
using SebraeLab.NewsLetter.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SebraeLab.NewsLetter.App.Services
{
    public interface INewsLetterAppService : IDisposable
    {
        Task<List<NewsLetterViewModel>> GetAll();
        Task<NewsLetterViewModel> GetById(Guid id);
        Task<bool> Add(NewsLetterViewModel newsLetterViewModel);
        Task<bool> Update(NewsLetterViewModel newsLetterViewModel);
    }
}
