import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { TodoDataService } from '../../services/todo-data.service';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private router: Router, private todoDataSvc: TodoDataService) { }

  displayedColumns: string[] = ['select', 'id', 'name', 'description', 'createDate', 'dueDate', 'completedDate', 'isLate', 'isPastDue'];
  items: MatTableDataSource<TodoItem>;
  selection = new SelectionModel<TodoItem>(true, []);
  idList: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.todoDataSvc.getAll().subscribe(data => {
      this.items = new MatTableDataSource(data);
      this.items.sort = this.sort;
      this.items.paginator = this.paginator;
    });
  }

  public itemClicked(row: TodoItem) {
    this.router.navigate(['/todo', row.id]);
  }

  public addItem() {
    this.router.navigate(['/todo', 0]);
  }

  applyFilter(filterValue: string) {
    this.items.filter = filterValue.trim().toLowerCase();
    this.selection.clear(); // not needed for filtering but helps protect having a selected but unseen item
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.items.filteredData.length; // using filteredData here as well
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        // selecting from fiteredData but using just data is valid (but not recommended)
        this.items.filteredData.forEach(row => this.selection.select(row));
  }

  actOnSelected(): void {
    this.idList = '';
    this.selection.selected.forEach(element => {
      if (this.idList.length === 0) {
        this.idList = element.id.toString();
      } else {
        this.idList = this.idList + ',' + element.id.toString();
      }
    });

    if (this.idList.length === 0) {
      alert('No items selected.  Thanks for trying though.');
    } else {
      // replace alert with action for each item and/or pass item list
      alert('Selected ' + this.selection.selected.length.toString() + ' items. Selected IDs include ' + this.idList);
    }
  }
}
