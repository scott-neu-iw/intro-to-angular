# Workshop 2 - Links and code snippets
### Slide 6
https://www.npmjs.com
### Slide 7
https://material.angular.io/guide/getting-started
```
npm install --save @angular/material @angular/cdk @angular/animations
```
### Slide 8
https://material.angular.io/components/categories
```
import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule,
  MatCheckboxModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
  MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class ThirdPartyComponentsModule { }
```
### Slide 10
https://material.angular.io/guide/theming
```
styles.scss:
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
```
```
index.html:
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
### Slide 11
https://material.angular.io/components/toolbar/overview

app-navigation.component.html
```
<mat-toolbar>
  <mat-toolbar-row>
    <a [routerLink]="['/']">Home</a> |
    <a [routerLink]="['/todo']">Todo Items</a> |
    {{ settings.environment }} |
    {{ settings.apiUrl }}
  </mat-toolbar-row>
</mat-toolbar>
```
### Slide 13
https://material.angular.io/components/table/overview

todo-list.component.html:
```
<table mat-table [dataSource]="items" class="todo-list-datatable">
  <!-- id Column -->
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef> ID </th>
    <td mat-cell *matCellDef="let row"> {{row.id}} </td>
  </ng-container>

  <!-- name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let row"> {{row.name}} </td>
  </ng-container>

  <!-- description Column -->
  <ng-container matColumnDef="description">
    <th mat-header-cell *matHeaderCellDef> Description </th>
    <td mat-cell *matCellDef="let row"> {{row.description}} </td>
  </ng-container>

  <!-- createDate Column -->
  <ng-container matColumnDef="createDate">
    <th mat-header-cell *matHeaderCellDef> Created On </th>
    <td mat-cell *matCellDef="let row">{{row.createDate | date:'MM/dd/yyyy'}} </td>
  </ng-container>

  <!-- dueDate Column -->
  <ng-container matColumnDef="dueDate">
    <th mat-header-cell *matHeaderCellDef> Due Date </th>
    <td mat-cell *matCellDef="let row">{{row.dueDate | date:'MM/dd/yyyy'}} </td>
  </ng-container>

  <!-- completedDate Column -->
  <ng-container matColumnDef="completedDate">
    <th mat-header-cell *matHeaderCellDef> Completed On </th>
    <td mat-cell *matCellDef="let row"> {{row.completedDate | date:'MM/dd/yyyy'}} </td>
  </ng-container>

  <!-- isLate Column -->
  <ng-container matColumnDef="isLate">
    <th mat-header-cell *matHeaderCellDef> Is Late </th>
    <td mat-cell *matCellDef="let row"> {{row.isLate}} </td>
  </ng-container>

  <!-- isPastDue Column -->
  <ng-container matColumnDef="isPastDue">
    <th mat-header-cell *matHeaderCellDef> Is Past Due </th>
    <td mat-cell *matCellDef="let row"> {{row.isPastDue}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

<div class="todo-list-items" *ngIf="items">Found {{ items.length }} items.</div>
```
### Slide 14
todo-list.component.ts:
```
displayedColumns: string[] = ['id', 'name', 'description', 'createDate', 'dueDate', 'completedDate', 'isLate', 'isPastDue'];
```
### Slide 15
todo-list.component.scss
```
table.todo-list-datatable {
  width: 100%;

  .mat-column-id {
    width: 50px;
  }

  th.date-col,
  td.date-col {
    width: 150px;
  }

  th.bool-col,
  td.bool-col {
    width: 125px;
  }
}
```
### Slide 16
todo-list.component.scss
```
  th.mat-header-cell {
    background-color: #404040;
    color:white;
  }

  tr.mat-row:hover {
    background-color: #cce6ff;
  }

  tr.altRowStyle {
    background-color: #f5f5f5;
  }
```
todo-list.component.html
```
  <tr mat-row *matRowDef="let row; let oddRow = odd; columns: displayedColumns;"
    [ngClass]="{altRowStyle:oddRow}"></tr>
```
### Slide 17
todo-list.component.html
```
  <tr mat-row *matRowDef="let row; let oddRow = odd; columns: displayedColumns;"
    [ngClass]="{altRowStyle:oddRow}" (click)="itemClicked(row)"></tr>

```
todo-list.component.ts
```
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../../services/todo-data.service';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private router: Router, private todoDataSvc: TodoDataService) { }

  displayedColumns: string[] = ['id', 'name', 'description', 'createDate', 'dueDate', 'completedDate', 'isLate', 'isPastDue'];
  items: Array<TodoItem>;

  ngOnInit() {
    this.todoDataSvc.getAll().subscribe(data => {
      this.items = data;
    });
  }

  public itemClicked(row: TodoItem) {
    this.router.navigate(['/todo', row.id]);
  }
}
```
### Slide 19
todo-list.component.ts
```
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { TodoDataService } from '../../services/todo-data.service';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private router: Router, private todoDataSvc: TodoDataService) { }

  displayedColumns: string[] = ['id', 'name', 'description', 'createDate', 'dueDate', 'completedDate', 'isLate', 'isPastDue'];
  items: MatTableDataSource<TodoItem>;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.todoDataSvc.getAll().subscribe(data => {
      this.items = new MatTableDataSource(data);
      this.items.sort = this.sort;
    });
  }

  public itemClicked(row: TodoItem) {
    this.router.navigate(['/todo', row.id]);
  }
}

```
### Slide 20
todo-list.component.html
```
<table mat-table matSort [dataSource]="items" class="todo-list-datatable">
  <!-- id Column -->
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
    <td mat-cell *matCellDef="let row"> {{row.id}} </td>
  </ng-container>
  
  ...
```

### Slide ??
todo-item-edit.component.ts
```
  @Input() item: TodoItem;
  @Output() cancelled = new EventEmitter<void>();
  @Output() saved = new EventEmitter<TodoItem>();

  ngOnInit() {
  }

  public cancel() {
    this.cancelled.emit();
  }
```
todo-item-edit.component.html
```
  <div>
    <button mat-stroked-button (click)="cancel()">Cancel</button>
  </div>
```
### 2b - Slide 9
```
  public edit() {
    this.isEditMode = true;
  }

  public cancel() {
    this.isEditMode = false;
  }

  public save(item: TodoItem) {
    // TODO: display save message
    this.isEditMode = false;
  }
```
### 2b - Slide 10
```
<app-todo-item-view *ngIf="!isEditMode" [item]="item"></app-todo-item-view>
<app-todo-item-edit *ngIf="isEditMode" [item]="item" (saved)="save($event)" (cancelled)="cancel()"></app-todo-item-edit>
<div *ngIf="!isEditMode">
  <button mat-stroked-button color="primary" (click)="edit()">Edit</button>
  <button mat-stroked-button [routerLink]="['/todo']">Back</button>
</div>
```
### 2b - Slide 12
https://angular.io/guide/forms-overview
### 2b - Slide 13
https://github.com/scott-neu-iw/angular-workshop/tree/master/02-Basics/Backend

todo-item-edit.component.ts
```
<form>
  <div class="input-container">
    <mat-form-field>
      <input matInput placeholder="Name">
    </mat-form-field>
    <mat-form-field>
      <textarea matInput placeholder="Description"></textarea>
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="Assignee">
    </mat-form-field>
    <mat-form-field>
      <input matInput [matDatepicker]="dueDate" placeholder="Due Date">
      <mat-datepicker-toggle matSuffix [for]="dueDate"></mat-datepicker-toggle>
      <mat-datepicker #dueDate></mat-datepicker>
    </mat-form-field>
  </div>
  <div>
    <button mat-stroked-button type="button" (click)="cancel()">Cancel</button>
  </div>
</form>
```
todo-item-edit.component.scss
```
.input-container {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.input-container > * {
  width: 100%;
}
```
### Slide 16
```
name.className = {{ nameSpy.className }}
<br>
form.valid = {{ todoForm.form.valid }}
<br>
form.touched = {{ todoForm.form.touched }}
<br>
form.untouched = {{ todoForm.form.untouched }}
<br>
form.pristine = {{ todoForm.form.pristine }}

```
### Slide 19
todo-item-save.model.ts
```
export interface TodoItemSave {
  id: number;
  name: string;
  description: string;
  dueDate?: Date;
  assignedTo: string;
}
```
todo-item-edit.component.ts
```
model: TodoItemSave;
@Input()
set item(value: TodoItem) {
   this.model = this.mapToSaveItem(value);
}
```
```
private mapToSaveItem(value: TodoItem): TodoItemSave {
return {
  id: value.id,
  name: value.name,
  description: value.description,
  dueDate: value.dueDate,
  assignedTo: value.assignedTo,
};
}
```
### Slide 20
```
<button mat-stroked-button type="submit" color="primary"
  [disabled]="!todoForm.form.valid">Save</button>
```
### Slide 21
todo-data.service.ts
```
public add(item: TodoItemSave): Observable<TodoItem> {
return this.httpClient.post<TodoItem>(this._baseUrl, item);
}

public update(id: Number, item: TodoItemSave): Observable<TodoItem> {
const url = `${this._baseUrl}/${id}`;
return this.httpClient.put<TodoItem>(url, item);
}

```
### Slide 22
todo-item-edit.component.ts
```
  public submit() {
    if (this.model.id === 0) {
      this.todoDataSvc.add(this.model).subscribe(data => {
        this.saved.emit(data);
      });
    } else {
      this.todoDataSvc.update(this.model.id, this.model).subscribe(data => {
        this.saved.emit(data);
      });
    }
  }
```
