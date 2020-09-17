import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter} from 'rxjs/operators';
import {selectActive, selectRegister, selectUsersItems} from '../../store/selectors/user.selector';
import {UserInterface} from '../interfaces/user.interface';
import {ClearRegisterAction, RegisterRequestAction, UsersListRequestAction} from '../../store/actions/user.actions';
import {Router} from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnDestroy {

  public subscriptions: Array<Subscription> = [];

  public hide = true;

  public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  public users$ = this.store.pipe(select(selectUsersItems), filter(Boolean));
  public register$ = this.store.pipe(select(selectRegister));
  public users: Array<UserInterface> = [];



  constructor(
    private apiService: ApiService,
    private store: Store,
    private router: Router,
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

      this.users$.subscribe( (users) => {
          if (users) {
            this.router.navigateByUrl('profile');
          }
      }),

      this.register$.subscribe( status => {
        if (status === 'success') {
          this.store.dispatch(new ClearRegisterAction());
          this.router.navigateByUrl('/');
        }
      })
    );
  }

  public load(): void {
    this.store.dispatch( new UsersListRequestAction());
  }

  public register(): void {
    const body = this.registerForm.getRawValue();
    this.store.dispatch(new RegisterRequestAction(body));
  }

  ngOnDestroy(): void {
       this.subscriptions.forEach( s => s.unsubscribe());
  }
}
