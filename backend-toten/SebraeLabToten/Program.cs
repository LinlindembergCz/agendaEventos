using SebraeLabToten.Setup;

var builder = WebApplication.CreateBuilder(args);

Mappers.RegisterMappers(builder.Services);
DependencyInjection.RegisterServices(builder.Services);
DbContexts.RegisterDbContexts(builder);
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

//app.UseAuthorization();

app.UseCors(cors => cors.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.MapGet("/", () => "Hello World!");

app.MapControllers();

app.Run();







