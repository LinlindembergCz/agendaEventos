using System;


namespace SebraeLab.Core.Exceptions
{ 
    public class DBConnectException : Exception
    {
        public DBConnectException()
        {
        }

        public DBConnectException(string message)
            : base(message)
        {
        }

        public DBConnectException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }

}