using System;
using SebraeLab.Core.DomainObjects;

namespace SebraeLab.Core.Data
{
    public interface IRepository<T> : IDisposable 
    {
        IUnitOfWork UnitOfWork { get; }
    }
}