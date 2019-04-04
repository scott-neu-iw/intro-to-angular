import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import modules
import { TodoRoutingModule } from './todo-routing.module';
import { ThirdPartyComponentsModule } from '../third-party-components/third-party-components.module';

// import sevices
import { TodoDataService } from './services/todo-data.service';

// import components
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoItemViewComponent } from './components/todo-item/todo-item-view/todo-item-view.component';
import { TodoItemEditComponent } from './components/todo-item/todo-item-edit/todo-item-edit.component';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, TodoItemViewComponent, TodoItemEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ThirdPartyComponentsModule,
    TodoRoutingModule
  ],
  providers: [
    TodoDataService
  ]
})
export class TodoModule { }
