import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
         RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor(private router: Router,
              private authSvc: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authSvc.isLoggedIn()) {
      return true;
    } else {
      // tslint:disable-next-line:no-console
      console.info('Not logged in, redirecting');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
