Slide 19:
app-settings.model.ts
```
export interface AppSettings {
  environment: string;
  apiUrl: string;
}
```
app-settings.service.ts
```
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
```
Slide 22:
app-navigation.component.ts
```
import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';
import { AppSettings } from 'src/app/core/models/app-settings.model';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  constructor(private appSettingsSvc: AppSettingsService) { }

  public settings: AppSettings;

  ngOnInit() {
    this.settings = this.appSettingsSvc.settings;
  }
}
```
app-navigation.component.html
```
<div>
  {{ settings.environment }} | {{ settings.apiUrl }}
</div>>
<hr>
```

