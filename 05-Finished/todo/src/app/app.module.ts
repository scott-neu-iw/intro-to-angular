import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import other modules
import { AppRoutingModule } from './app-routing.module';
import { ThirdPartyComponentsModule } from './third-party-components/third-party-components.module';
import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';

// import components
import { AppComponent } from './app.component';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthenticatedInterceptor } from './core/services/authenticated.interceptor';
import { AppSettingsService } from './core/services/app-settings.service';

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
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
