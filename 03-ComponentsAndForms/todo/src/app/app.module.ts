import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import other modules
import { AppRoutingModule } from './app-routing.module';
import { ThirdPartyComponentsModule } from './third-party-components/third-party-components.module';
import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';

// import components
import { AppComponent } from './app.component';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ThirdPartyComponentsModule,
    CoreModule,
    TodoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
