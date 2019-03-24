import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../../services/todo-data.service';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private todoDataSvc: TodoDataService
  ) {}

  itemId: number;
  item: TodoItem;
  isEditMode: boolean;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemId = Number(params.id);
      if (this.itemId === 0) {
        // add new item
        this.isEditMode = true;
      } else {
        this.todoDataSvc.get(this.itemId).subscribe(data => {
          this.isEditMode = false;
          this.item = data;
        });
      }
    });
  }

  public edit() {
    this.isEditMode = true;
  }

  public cancel() {
    this.isEditMode = false;
    if (this.itemId === 0) {
      this.router.navigate(['/todo']);
    }
  }

  public save(value: TodoItem) {
    // update the route on a new item save, without triggering a route change
    if (this.itemId === 0) {
      const url = this.router.createUrlTree(['/todo', value.id]).toString();
      this.location.go(url);
    }

    this.itemId = value.id;
    this.item = value;
    this.isEditMode = false;
  }
}
