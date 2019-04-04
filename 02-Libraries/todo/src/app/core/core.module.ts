import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsService } from './services/app-settings.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AppSettingsService
  ]
})
export class CoreModule { }
