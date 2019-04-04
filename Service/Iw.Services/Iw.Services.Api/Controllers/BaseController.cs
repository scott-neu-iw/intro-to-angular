using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Iw.Services.Api.Controllers
{
   [ResponseCache(NoStore = true, Duration = 0)]
   [EnableCors("default-cors-policy")]
   public abstract class BaseController : Controller
    {
    }
}
