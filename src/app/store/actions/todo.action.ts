import {Action} from '@ngrx/store';

export enum TodosActionsTypes {
  TODOS_LIST_REQUEST = '[todos] list request',
  TODOS_LIST_ERROR = '[todos] list error',
  TODOS_LIST_SUCCESS = '[todos] list success',

  TODOS_REMOVE_REQUEST = '[todos] remove request',
  TODOS_REMOVE_ERROR = '[todos] remove error',
  TODOS_REMOVE_SUCCESS = '[todos] remove success',

  TODOS_ADD_REQUEST = '[todos] add request',
  TODOS_ADD_ERROR = '[todos] add error',
  TODOS_ADD_SUCCESS = '[todos] add success',

  TODOS_UPDATE_REQUEST = '[todos] update request',
  TODOS_UPDATE_ERROR = '[todos] update error',
  TODOS_UPDATE_SUCCESS = '[todos] update success',

}

export class TodosListRequestAction implements Action {
  readonly type = TodosActionsTypes.TODOS_LIST_REQUEST;


  constructor() {
  }
}

export class TodosUpdateRequestAction implements Action {
  readonly type = TodosActionsTypes.TODOS_UPDATE_REQUEST;


  constructor(public payload: any) {
  }
}

export class TodosAddRequestAction implements Action {
  readonly type = TodosActionsTypes.TODOS_ADD_REQUEST;


  constructor() {
  }
}

export class TodosRemoveRequestAction implements Action {
  readonly type = TodosActionsTypes.TODOS_REMOVE_REQUEST;


  constructor(public payload: any) {
  }
}

export class TodosListErrorAction implements Action {
  readonly type = TodosActionsTypes.TODOS_LIST_ERROR;

  constructor(public payload: any) {
  }
}

export class TodosUpdateErrorAction implements Action {
  readonly type = TodosActionsTypes.TODOS_UPDATE_ERROR;

  constructor(public payload: any) {
  }
}

export class TodosAddErrorAction implements Action {
  readonly type = TodosActionsTypes.TODOS_ADD_ERROR;

  constructor(public payload: any) {
  }
}

export class TodosRemoveErrorAction implements Action {
  readonly type = TodosActionsTypes.TODOS_REMOVE_ERROR;

  constructor(public payload: any) {
  }
}


export class TodosListSuccessAction implements Action {
  readonly type = TodosActionsTypes.TODOS_LIST_SUCCESS;

  constructor(public payload: any) {
  }
}

export class TodosUpdateSuccessAction implements Action {
  readonly type = TodosActionsTypes.TODOS_UPDATE_SUCCESS;

  constructor(public payload: any) {
  }
}

export class TodosAddSuccessAction implements Action {
  readonly type = TodosActionsTypes.TODOS_ADD_SUCCESS;

  constructor(public payload: any) {
  }
}

export class TodosRemoveSuccessAction implements Action {
  readonly type = TodosActionsTypes.TODOS_REMOVE_SUCCESS;

  constructor(public payload: any) {
  }
}


export type TodosActionsUnion =
  | TodosListRequestAction
  | TodosListErrorAction
  | TodosListSuccessAction
  | TodosRemoveRequestAction
  | TodosRemoveErrorAction
  | TodosRemoveSuccessAction
  | TodosAddErrorAction
  | TodosAddSuccessAction
  | TodosAddRequestAction
  | TodosUpdateRequestAction
  | TodosUpdateErrorAction
  | TodosUpdateSuccessAction;
