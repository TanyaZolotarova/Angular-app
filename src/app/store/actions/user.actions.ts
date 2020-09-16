import {Action} from '@ngrx/store';

export enum UsersActionsTypes {
  USERS_LIST_REQUEST = '[users] list request',
  USERS_LIST_ERROR = '[users] list error',
  USERS_LIST_SUCCESS = '[users] list success',

  USERS_ITEM_REQUEST = '[users] item request',
  USERS_ITEM_ERROR = '[users] item error',
  USERS_ITEM_SUCCESS = '[users] item success',



}

export class UsersListRequestAction implements Action {
  readonly type = UsersActionsTypes.USERS_LIST_REQUEST;


  constructor() {
  }
}

export class UsersItemRequestAction implements Action {
  readonly type = UsersActionsTypes.USERS_ITEM_REQUEST;


  constructor(public payload: any) {
  }
}

export class UsersListErrorAction implements Action {
  readonly type = UsersActionsTypes.USERS_LIST_ERROR;

  constructor(public payload: any) {
  }
}

export class UsersItemErrorAction implements Action {
  readonly type = UsersActionsTypes.USERS_ITEM_ERROR;

  constructor(public payload: any) {
  }
}


export class UsersListSuccessAction implements Action {
  readonly type = UsersActionsTypes.USERS_LIST_SUCCESS;

  constructor(public payload: any) {
  }
}

export class UsersItemSuccessAction implements Action {
  readonly type = UsersActionsTypes.USERS_ITEM_SUCCESS;

  constructor(public payload: any) {
  }
}


export type UsersActionsUnion =
  | UsersListRequestAction
  | UsersItemRequestAction
  | UsersListErrorAction
  | UsersItemErrorAction
  | UsersListSuccessAction
  | UsersItemSuccessAction;
