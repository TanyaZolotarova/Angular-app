import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';

import {ApiService} from '../../services/api.service';
import {
  TodosActionsTypes,
  TodosListErrorAction,
  TodosListRequestAction,
  TodosListSuccessAction
} from '../actions/todo.action';


@Injectable()
export class TodosEffects {

  protected list$ = createEffect(() => this.actions$.pipe(
    ofType<TodosListRequestAction>(TodosActionsTypes.TODOS_LIST_REQUEST),
    exhaustMap((action) =>
      this.appService.getTodos().pipe(
        map((resp) =>
              new TodosListSuccessAction(resp)
        ),
        catchError((response: any) =>
          of(new TodosListErrorAction(response)),
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
