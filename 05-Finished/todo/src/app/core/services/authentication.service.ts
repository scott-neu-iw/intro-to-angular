import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AppSettingsService } from './app-settings.service';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient,
              private appSettingsSvc: AppSettingsService,
              private router: Router) {
                this.jwtHelper = new JwtHelperService();
              }

  private TOKEN_NAME = 'accessToken';

  public currentUser: User;
  private jwtHelper: JwtHelperService;

  public login(loginRequest: LoginRequest): Observable<boolean> {
    const url = `${this.appSettingsSvc.settings.apiUrl}/v2/authentication/login`;

    return this.httpClient.post<LoginResponse>(url, loginRequest)
    .pipe(
      tap(data => this.loginUser(data)),
      map(() => this.isLoggedIn()),
      catchError(err => {
        console.error(err);
        return of(false);
      })
    );
  }

  public isLoggedIn(): boolean {
    const token = this.getLoginToken();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public getLoginToken(): string {
    return sessionStorage.getItem(this.TOKEN_NAME);
  }

  public logoff() {
    sessionStorage.clear();
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  private loginUser(data: LoginResponse): void {
    sessionStorage.setItem(this.TOKEN_NAME, data.accessToken);
    this.extractUser();
  }

  private extractUser() {
    const decodedToken = this.jwtHelper.decodeToken(this.getLoginToken());
    const user: User = {
      id: decodedToken.sub,
      email: decodedToken.email,
      firstName: decodedToken.given_name,
      lastName: decodedToken.family_name,
      roles: decodedToken.user_authorization.split(',')
    };
    this.currentUser = user;
  }
}
