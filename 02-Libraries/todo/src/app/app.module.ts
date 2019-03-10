import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import module items
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import other modules
import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    TodoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
