import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsService } from './services/app-settings.service';
import { AuthenticationService } from './services/authentication.service';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AppSettingsService,
    AuthenticationService,
    IsLoggedInGuard
  ]
})
export class CoreModule { }
