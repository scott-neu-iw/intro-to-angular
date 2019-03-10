using System;
using Iw.Services.Api.DataModels;
using Iw.Services.Api.Repositories;

namespace Iw.Services.Api.Services
{
   public interface IAuthenticationService
   {
      User Login(string username, string password);
   }

   public class AuthenticationService : IAuthenticationService
   {
      private readonly IUserRepository _userRepository;

      public AuthenticationService(IUserRepository userRepository)
      {
         _userRepository = userRepository;
      }

      public User Login(string username, string password)
      {
         // to test an invalid attempt
         if (username.StartsWith("bad", StringComparison.InvariantCultureIgnoreCase)) return null;

         return _userRepository.Get(username);
      }
   }
}
