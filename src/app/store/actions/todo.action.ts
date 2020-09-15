import {Action} from '@ngrx/store';

export enum TodosActionsTypes {
  TODOS_LIST_REQUEST = '[todos] list request',
  TODOS_LIST_ERROR = '[todos] list error',
  TODOS_LIST_SUCCESS = '[todos] list success',

  // TODOS_ITEM_REQUEST = '[todos] item request',
  // TODOS_LIST_ERROR = '[todos] list error',
  // TODOS_LIST_SUCCESS = '[todos] list success',

  TODOS_REMOVE_REQUEST = '[todos] remove request',
  TODOS_REMOVE_ERROR = '[todos] remove error',
  TODOS_REMOVE_SUCCESS = '[todos] remove success',

}

export class TodosListRequestAction implements Action {
  readonly type = TodosActionsTypes.TODOS_LIST_REQUEST;

  constructor() {
  }
}

export class TodosListErrorAction implements Action {
  readonly type = TodosActionsTypes.TODOS_LIST_ERROR;

  constructor(public payload: any) {
  }
}

export class  TodosListSuccessAction implements Action {
  readonly type = TodosActionsTypes.TODOS_LIST_SUCCESS;

  constructor(public payload: any) {
  }
}


export type TodosActionsUnion =
  | TodosListRequestAction
  | TodosListErrorAction
  | TodosListSuccessAction;
