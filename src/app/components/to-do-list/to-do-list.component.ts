import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {TodoInterface} from '../interfaces/todo.interface';
import {select, Store} from '@ngrx/store';
import {
  TodosAddRequestAction,
  TodosListRequestAction,
  TodosRemoveRequestAction,
  TodosUpdateRequestAction
} from '../../store/actions/todo.action';
import {selectTodosItems} from '../../store/selectors/todo.selector';
import {filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {selectActive} from '../../store/selectors/user.selector';
import {UserInterface} from '../interfaces/user.interface';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit, OnDestroy {
  private $user = this.store.pipe(select(selectActive), filter(Boolean));
  public user: UserInterface;

  public subscriptions: Array<Subscription> = [];

  public newTodo = new FormGroup(
    {
      title: new FormControl('', [
        Validators.required
      ]),
    }
  );

  public users: Array<UserInterface> = [];
  public todos$ = this.store.pipe(select(selectTodosItems), filter(Boolean));

  public todos: Array<TodoInterface> = [];

  constructor(private apiService: ApiService,
              private store: Store) {

  }

  public ngOnInit(): void {
    this.load();
    this.subscriptions.push(
      this.todos$.subscribe((todos: Array<TodoInterface>) => {
        console.log(todos);
        this.todos = todos;

      })
    );
    this.subscriptions.push(
      this.$user.subscribe((user: UserInterface) => {
        this.user = user;
      })
    );
  }

  public deleteTodo(id: number): void {
    this.store.dispatch(new TodosRemoveRequestAction(id));
  }

  // public deleteSelectedTodos(): void {
  //   for (let i = (this.todos.length - 1); i > -1; i--) {
  //     if (this.todos[i].status) {
  //       this.todos.splice(i, 1);
  //     }
  //   }
  // }

  public load(): void {
    this.store.dispatch(new TodosListRequestAction());
  }

  public createTodo(): void {
    this.store.dispatch(new TodosAddRequestAction({...this.newTodo.getRawValue(), userId: this.user.id}));
    // this.apiService.createTodo({...this.newTodo.getRawValue(), userId: this.user.id}).subscribe((todo) => {
    //   this.todos = [...this.todos, todo];
    // });

    this.newTodo.reset();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());

  }

  public setStatus(todo: TodoInterface): void {
    const status = todo.status;
    this.store.dispatch(new TodosUpdateRequestAction({id: todo.id, status: !status}));

    //   this.apiService.updateTodo(todo.id, !status).subscribe( (data) => {
    //   console.log(data);
    // });
  }
}
