import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../core/services/app-settings.service';
import { AppSettings } from '../../core/models/app-settings.model';
import { AuthenticationService } from '../../core/services/authentication.service';

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
