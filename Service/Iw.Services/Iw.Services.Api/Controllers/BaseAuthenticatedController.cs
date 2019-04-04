using System;
using Iw.Services.Api.DataModels;
using Iw.Services.Api.Repositories;
using Iw.Services.Api.Services;

namespace Iw.Services.Api.Controllers
{
   public class BaseAuthenticatedController : BaseController
   {
      private readonly IUserRepository _userRepository;
      protected User AuthenticatedUser => GetAuthenticatedUser();

      public BaseAuthenticatedController(IUserRepository userRepository)
      {
         _userRepository = userRepository;
      }

      private User GetAuthenticatedUser()
      {
         try
         {
            var userId = JwtTokenService.ToUser(HttpContext.User)?.Id;
            return userId == null ? null : _userRepository.Get(userId.Value);
         }
         catch (Exception)
         {
            return null;
         }
      }
   }
}
