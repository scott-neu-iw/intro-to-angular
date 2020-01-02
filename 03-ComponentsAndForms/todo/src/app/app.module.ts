import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import module items
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import other modules
import { CoreModule } from './core/core.module';
import { TodoModule } from './todo/todo.module';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { ThirdPartyComponentsModule } from './third-party-components/third-party-components.module';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ThirdPartyComponentsModule,
    CoreModule,
    TodoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
