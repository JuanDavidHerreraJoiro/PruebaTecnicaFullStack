using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using PruebaTecnicaFullStack.Config;
using PruebaTecnicaFullStack.Data;
using Microsoft.EntityFrameworkCore;
using System.Text;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.WithOrigins("https://localhost:7112",
                                "http://localhost:5120",
                                "https://localhost:44475",
                                "http://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});

// Configurar cadena de Conexion con EF
var connectionString = builder.Configuration.GetConnectionString("ConnectionString");
builder.Services.AddDbContext<UniversidadDBContext>(x => x.UseSqlServer(connectionString));


// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddSwaggerGen(c => {
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "API Prueba Tecnica",
        Description = @"ASP.NET Core Web API + Angular. 
                Entityframework.",
        Contact = new OpenApiContact
        {
            Name = "Juan Herrera Joiro",
            Email = string.Empty,
            Url = new Uri("https://github.com/JuanDavidHerreraJoiro"),
        }
    });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Type=ReferenceType.SecurityScheme,
                        Id="Bearer"
                    }
                },
                new string[]{}
            }
        });
});

#region configure strongly typed settings objects
var appSettingsSection = builder.Configuration.GetSection("AppSetting");
builder.Services.Configure<AppSetting>(appSettingsSection);
#endregion

#region Configure jwt authentication inteprete el token 
var appSettings = appSettingsSection.Get<AppSetting>();
var key = Encoding.ASCII.GetBytes(appSettings.Secret!);

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

// start swagger
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1 Prueba Tecnica");
});

app.MapFallbackToFile("index.html");;

app.Run();
