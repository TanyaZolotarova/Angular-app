import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {loadConfigurationFromPath} from 'tslint/lib/configuration';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent {

  newTodo =  new FormGroup({
  name: new FormControl('', [Validators.required]),
    });

  public todos: Array< {name: string, completed: boolean}> = [];


  constructor(    private apiService: ApiService) {

  }

  // tslint:disable-next-line:typedef
  // addTodo(event) {
  //   this.todoObj = {
  //     newTodo: this.newTodo,
  //     completed: false
  //   };
  //   this.todos.push(this.todoObj);
  //   this.newTodo = '';
  //   event.preventDefault();
  // }

  // tslint:disable-next-line:typedef
  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  // tslint:disable-next-line:typedef
  deleteSelectedTodos() {
    for (let i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  public createTodo(): void {
    this.apiService.createTodo(this.newTodo.getRawValue()).subscribe(data => {
      console.log(data);
    });
  }
}
