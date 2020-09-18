import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {LoginRequestAction} from '../../store/actions/user.actions';
import {selectActive} from '../../store/selectors/user.selector';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public hide = true;
  private user$ = this.store.pipe(select(selectActive));
  public subscriptions: Array<Subscription> = [];

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private store: Store,
    private route: ActivatedRoute
  ) {
  }


  getErrorMessageEmail(): string {
    if (this.loginForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.controls.email.hasError ? 'Not a valid email' : '';
  }

  getErrorMessagePassword(): string {
    if (this.loginForm.controls.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.controls.password.hasError ? 'Not a valid password' : '';
  }


  public ngOnInit(): void {


    this.subscriptions.push(
      this.user$.subscribe((user) => {
        if (user) {
          this.router.navigateByUrl('profile');
        }
      }),
    );
  }

  public login(): any {
    const body = this.loginForm.getRawValue();
    console.log(body);
    this.store.dispatch(new LoginRequestAction(body));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
