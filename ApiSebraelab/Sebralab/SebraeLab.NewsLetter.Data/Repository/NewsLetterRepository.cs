using Microsoft.EntityFrameworkCore;
using SebraeLab.NewsLetter.Domain;
using SebraeLab.NewsLetter.Data;
using SebraeLab.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json.Linq;
using System.Data.Common;
using System.Data;
using Microsoft.AspNetCore.Mvc;

namespace SebraeLab.NewsLetter.Data.Repository
{
    public class NewsLetterRepository : INewsLetterRepository
    {
        private readonly NewsLetterContext _context;

        public NewsLetterRepository(NewsLetterContext context)
        {
            _context = context;
        }
        public IUnitOfWork UnitOfWork => _context;

        public async Task<List<InscricaoNewsLetter>> GetAll()
        {
            return await _context.NewsLetter.AsNoTracking().ToListAsync();
        } 


        public async Task<InscricaoNewsLetter> GetById(Guid id)
        {
            return await _context.NewsLetter.AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
        }

        public void Add(InscricaoNewsLetter inscricao)
        {
            _context.NewsLetter.Add(inscricao);
        }


        public void Update(InscricaoNewsLetter inscricao)
        {
            _context.NewsLetter.Update(inscricao);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}