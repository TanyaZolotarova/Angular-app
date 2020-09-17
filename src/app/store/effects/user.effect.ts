import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';

import {ApiService} from '../../services/api.service';
import {
  UsersActionsTypes,
  UsersItemErrorAction,
  UsersItemRequestAction,
  UsersItemSuccessAction,
  UsersUpdateRequestAction,
  UsersUpdateErrorAction,
  UsersUpdateSuccessAction,
  LoginRequestAction,
  LoginSuccessAction,
  LoginErrorAction,
  RegisterRequestAction,
  RegisterSuccessAction,
  RegisterErrorAction
} from '../actions/user.actions';
import {Router} from '@angular/router';


@Injectable()
export class UsersEffects {

  protected login$ = createEffect(() => this.actions$.pipe(
    ofType<LoginRequestAction>(UsersActionsTypes.LOGIN_REQUEST),
    exhaustMap((action) =>
      this.appService.login(action.payload).pipe(
        map((resp) =>
          new LoginSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new LoginErrorAction(response)),
        ),
      )
    ),
  ));

    protected register$ = createEffect(() => this.actions$.pipe(
    ofType<RegisterRequestAction>(UsersActionsTypes.REGISTER_REQUEST),
    exhaustMap((action) =>
      this.appService.register(action.payload).pipe(
        map((resp) =>
          new RegisterSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new RegisterErrorAction(response)),
        ),
      )
    ),
  ));

  protected remove$ = createEffect(() => this.actions$.pipe(
    ofType<UsersItemRequestAction>(UsersActionsTypes.USERS_ITEM_REQUEST),
    exhaustMap((action) =>
      this.appService.deleteTodo(action.payload).pipe(
        map((resp) =>
          new UsersItemSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new UsersItemErrorAction(response)),
        ),
      )
    ),
  ));

    protected update$ = createEffect(() => this.actions$.pipe(
    ofType<UsersUpdateRequestAction>(UsersActionsTypes.USERS_UPDATE_REQUEST),
    exhaustMap((action) =>
      this.appService.deleteTodo(action.payload).pipe(
        map((resp) =>
          new UsersUpdateSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new UsersUpdateErrorAction(response)),
        ),
      )
    ),
  ));

  public constructor(
    protected actions$: Actions,
    protected appService: ApiService,
  ) {
  }
}
