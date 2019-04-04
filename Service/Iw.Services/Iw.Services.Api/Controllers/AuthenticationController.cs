using System;
using Iw.Services.Api.Repositories;
using Iw.Services.Api.Services;
using Iw.Services.Api.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Iw.Services.Api.Controllers
{
   [ApiVersion("2.0")]
   [Route("v{version:apiVersion}/authentication")]
   public class AuthenticationController : BaseAuthenticatedController
   {
      private readonly IAuthenticationService _authenticationService;
      private readonly IJwtTokenService _tokenService;

      public AuthenticationController(IUserRepository userRepository, IAuthenticationService authenticationService, IJwtTokenService tokenService) 
         : base(userRepository)
      {
         _authenticationService = authenticationService;
         _tokenService = tokenService;
      }

      [HttpPost("login")]
      [AllowAnonymous]
      public IActionResult Login([FromBody] LoginRequest loginRequest)
      {
         try
         {
            var user = _authenticationService.Login(loginRequest.Username, loginRequest.Password);
            if (user == null) return Unauthorized();

            var jwt = _tokenService.CreateJwt(user);

            var response = _tokenService.GenerateTokenResponse(jwt);

            return Ok(response);
         }
         catch (Exception e)
         {
            Console.WriteLine(e);
            return BadRequest();
         }
      }

      [HttpGet("token/refresh")]
      public IActionResult RefreshToken()
      {
         try
         {
            var user = AuthenticatedUser;
            if (user == null) return Unauthorized();

            var jwt = _tokenService.CreateJwt(user);

            var response = _tokenService.GenerateTokenResponse(jwt);

            return Ok(response);
         }
         catch (Exception e)
         {
            Console.WriteLine(e);
            return BadRequest();
         }
      }
   }
}
