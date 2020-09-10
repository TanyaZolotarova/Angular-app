import {Component} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent {

  newTodo: string;
  todos: any;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  // tslint:disable-next-line:typedef
  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

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
}
