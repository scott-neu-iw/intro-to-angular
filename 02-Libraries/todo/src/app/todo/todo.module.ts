import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDataService } from './services/todo-data.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  providers: [
    TodoDataService
  ]
})
export class TodoModule { }
