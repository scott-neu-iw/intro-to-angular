import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettingsService } from './app-settings.service';
import { AuthenticationService } from './authentication.service';
import { parse, UrlWithParsedQuery } from 'url';

@Injectable()
export class AuthenticatedInterceptor implements HttpInterceptor {
  constructor(private appSettingsSvc: AppSettingsService, private authSvc: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.appSettingsSvc.settings) {
      const requestUrl = parse(request.url, true, true);

      if (this.isWhitelistedDomain(requestUrl, this.appSettingsSvc.settings.jwtAttachDomains)
        && !this.isBlacklistedRoute(requestUrl, this.appSettingsSvc.settings.jwtIgnoreRoutes)) {

        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.authSvc.getLoginToken()}`
          }
        });
      }
    }

    return next.handle(request);
  }

  // https://github.com/auth0/angular2-jwt/blob/master/src/jwt.interceptor.ts

  /**
   * Determine if the domain is whitelisted
   * @param request
   * @param whitelistedDomains
   */
  private isWhitelistedDomain(requestUrl: UrlWithParsedQuery, whitelistedDomains: Array<string | RegExp>): boolean {
    return (
      requestUrl.host === null ||
      whitelistedDomains.findIndex(
        domain =>
          typeof domain === 'string'
            ? domain === requestUrl.host
            : domain instanceof RegExp
              ? domain.test(requestUrl.host)
              : false
      ) > -1
    );
  }

  /**
   * Determines if the route is backlisted
   * @param request
   * @param blacklistedRoutes
   */
  private isBlacklistedRoute(requestUrl: UrlWithParsedQuery, blacklistedRoutes: Array<string | RegExp>): boolean {
    return (
      blacklistedRoutes.findIndex(
        route =>
          typeof route === 'string'
            ? route === requestUrl.pathname
            : route instanceof RegExp
              ? route.test(requestUrl.pathname)
              : false
      ) > -1
    );
  }
}
