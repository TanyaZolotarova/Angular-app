import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {UserInterface} from '../interfaces/user.interface';
import {select, Store} from '@ngrx/store';
import {LogoutAction, UsersUpdateRequestAction} from '../../store/actions/user.actions';
import {Router} from '@angular/router';
import {selectActive} from '../../store/selectors/user.selector';
import {filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})


export class EditProfileComponent implements OnInit, OnDestroy {

  private $user = this.store.pipe(select(selectActive), filter(Boolean));
  public user: UserInterface;

  public subscriptions: Array<Subscription> = [];

  public password = new FormControl('', [Validators.required]);
  hide = true;
  ReactiveForm: FormGroup;
  public users: Array<UserInterface> = [];
  public email: any;
  public name: any;


  constructor(
    private apiService: ApiService,
    private store: Store,
    private router: Router,
  ) {
  }


  public ngOnInit(): void {
    this.subscriptions.push(
      this.$user.subscribe((user: UserInterface) => {
        this.user = user;
        this.name = user.name;
        this.email = user.email;
      })
    );
  }

  public logOut(): void {
    this.store.dispatch(new LogoutAction());
    this.router.navigateByUrl('/');
  }

  public updateUser(): void {
     this.store.dispatch(new UsersUpdateRequestAction({id: this.user.id, name: this.name, email: this.email }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
