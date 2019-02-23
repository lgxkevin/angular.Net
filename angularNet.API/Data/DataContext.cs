using angularNet.API.Properties.Models;
using Microsoft.EntityFrameworkCore;

namespace angularNet.API.Data
{
    public class DataContext:DbContext
    {
        public DataContext (DbContextOptions<DbContext> options) :base (options){}

        public DbSet <Value> Values {get;set;}
        
    }
}