import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';

import {ApiService} from '../../services/api.service';
import {
  TodosActionsTypes,
  TodosListErrorAction,
  TodosListRequestAction,
  TodosListSuccessAction,
  TodosRemoveErrorAction,
  TodosRemoveRequestAction,
  TodosRemoveSuccessAction,
  TodosAddErrorAction,
  TodosAddSuccessAction,
  TodosAddRequestAction,
  TodosUpdateRequestAction,
  TodosUpdateErrorAction,
  TodosUpdateSuccessAction
} from '../actions/todo.action';


@Injectable()
export class TodosEffects {

  protected me$ = createEffect(() => this.actions$.pipe(
    ofType<TodosListRequestAction>(TodosActionsTypes.TODOS_LIST_REQUEST),
    exhaustMap((action) =>
      this.appService.me().pipe(
        map((resp) =>
          new TodosListSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new TodosListErrorAction(response)),
        ),
      )
    ),
  ));

  protected removed$ = createEffect(() => this.actions$.pipe(
    ofType<TodosRemoveRequestAction>(TodosActionsTypes.TODOS_REMOVE_REQUEST),
    exhaustMap((action) =>
      this.appService.deleteTodo(action.payload).pipe(
        map((resp) =>
          new TodosRemoveSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new TodosRemoveErrorAction(response)),
        ),
      )
    ),
  ));

  protected add$ = createEffect(() => this.actions$.pipe(
    ofType<TodosAddRequestAction>(TodosActionsTypes.TODOS_ADD_REQUEST),
    exhaustMap((action) =>
      this.appService.createTodo(action.payload).pipe(
        map((resp) =>
          new TodosAddSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new TodosAddErrorAction(response)),
        ),
      )
    ),
  ));

  protected update$ = createEffect(() => this.actions$.pipe(
    ofType<TodosUpdateRequestAction>(TodosActionsTypes.TODOS_UPDATE_REQUEST),
    exhaustMap((action) =>
      this.appService.updateTodo(action.payload).pipe(
        map((resp) =>
          new TodosUpdateSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new TodosUpdateErrorAction(response)),
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
