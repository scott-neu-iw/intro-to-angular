import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';
import { AppSettings } from 'src/app/core/models/app-settings.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  constructor(private appSettingsSvc: AppSettingsService, private authService: AuthenticationService) { }

  public settings: AppSettings;

  ngOnInit() {
    this.settings = this.appSettingsSvc.settings;
  }

  public logoff() {
    this.authService.logoff();
  }
}
