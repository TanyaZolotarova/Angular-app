import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';

import {ApiService} from '../../services/api.service';
import {
  UsersActionsTypes,
  UsersListErrorAction,
  UsersListRequestAction,
  UsersListSuccessAction,
  UsersItemErrorAction,
  UsersItemRequestAction,
  UsersItemSuccessAction
} from '../actions/user.actions';


@Injectable()
export class UsersEffects {

  protected list$ = createEffect(() => this.actions$.pipe(
    ofType<UsersListRequestAction>(UsersActionsTypes.USERS_LIST_REQUEST),
    exhaustMap((action) =>
      this.appService.getTodos().pipe(
        map((resp) =>
          new UsersListSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new UsersListErrorAction(response)),
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

  public constructor(
    protected actions$: Actions,
    protected appService: ApiService,
  ) {
  }
}
