import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppSettings } from '../models/app-settings.model';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppSettingsService {
  constructor(private http: HttpClient) { }

  private appSettings: AppSettings;
  public get settings(): AppSettings {
    return this.appSettings;
  }

  public loadConfig(): Promise<AppSettings> {
    return this.http.get<AppSettings>('./assets/app-settings.json')
      .pipe(
        tap((config) => {
          this.appSettings = config;
        })
      )
      .toPromise();
  }
}
