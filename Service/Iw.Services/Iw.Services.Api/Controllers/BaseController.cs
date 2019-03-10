using Microsoft.AspNetCore.Mvc;

namespace Iw.Services.Api.Controllers
{
   [ResponseCache(NoStore = true, Duration = 0)]
    public abstract class BaseController : Controller
    {
    }
}
