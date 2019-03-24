import { Injectable } from '@angular/core';
import { AppSettings } from '../models/app-settings.model';

@Injectable()
export class AppSettingsService {
  constructor() {
    this.appSettings = {
      environment: 'dev',
      apiUrl: 'http://localhost:8080'
    };
  }

  private appSettings: AppSettings;
  get settings(): AppSettings {
    return this.appSettings;
  }
}
