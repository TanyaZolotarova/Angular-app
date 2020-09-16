import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter} from 'rxjs/operators';
import {selectUsersItems} from '../../store/selectors/user.selector';
import {TodoInterface} from '../interfaces/todo.interface';
import {UserInterface} from '../interfaces/user.interface';
import {UsersListRequestAction} from '../../store/actions/user.actions';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public subscriptions: Array<Subscription> = [];

  public hide = true;

  public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  public users$ = this.store.pipe(select(selectUsersItems), filter(Boolean));
  public users: Array<UserInterface> = [];




  constructor(
    private apiService: ApiService,
    private store: Store
  ) {
  }


  getErrorMessageEmail(): string {
    if (this.registerForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.controls.email.hasError ? 'Not a valid email' : '';
  }
    getErrorMessagePassword(): string {
    if (this.registerForm.controls.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.registerForm.controls.password.hasError ? 'Not a valid password' : '';
  }

  ngOnInit(): void {
    this.load();
    this.subscriptions.push(
      this.users$.subscribe( (todos: Array<TodoInterface>) => {
        this.users = this.users;
      })
    );
  }

  public load(): void {
    this.store.dispatch( new UsersListRequestAction());
  }

  public register(): void {
    const body = this.registerForm.getRawValue();
    this.apiService.createUser(body).subscribe(console.log);
  }
}
