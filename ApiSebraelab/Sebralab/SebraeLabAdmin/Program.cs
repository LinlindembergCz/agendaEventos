using SebraeLabAdmin.Setup;

var builder = WebApplication.CreateBuilder(args);


DependencyInjection.RegisterServices(builder.Services);
DbContexts.RegisterDbContexts(builder);
Mappers.RegisterMappers(builder.Services);
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

app.MapControllers();

app.Run();
