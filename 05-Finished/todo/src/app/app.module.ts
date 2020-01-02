import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import module items
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticatedInterceptor } from './core/services/authenticated.interceptor';
import { AppSettingsService } from './core/services/app-settings.service';
import { LoginComponent } from './components/login/login.component';

// import other modules
import { CoreModule } from './core/core.module';
import { TodoModule } from './todo/todo.module';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { ThirdPartyComponentsModule } from './third-party-components/third-party-components.module';

export function appSettingsLoader(appSettingSvc: AppSettingsService) {
  return () => appSettingSvc.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ThirdPartyComponentsModule,
    CoreModule,
    TodoModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER,
      useFactory: appSettingsLoader,
      deps: [AppSettingsService],
      multi: true },
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthenticatedInterceptor,
      multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
