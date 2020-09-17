import {Action} from '@ngrx/store';

export enum UsersActionsTypes {
  USERS_LIST_REQUEST = '[users] list request',
  USERS_LIST_ERROR = '[users] list error',
  USERS_LIST_SUCCESS = '[users] list success',

  USERS_ITEM_REQUEST = '[users] item request',
  USERS_ITEM_ERROR = '[users] item error',
  USERS_ITEM_SUCCESS = '[users] item success',

  LOGIN_REQUEST = '[users] login request',
  LOGIN_ERROR = '[users] login error',
  LOGIN_SUCCESS = '[users] login success',

  REGISTER_REQUEST = '[users] register request',
  REGISTER_ERROR = '[users] register error',
  REGISTER_SUCCESS = '[users] register success',

  USERS_UPDATE_REQUEST = '[users] update request',
  USERS_UPDATE_ERROR = '[users] update error',
  USERS_UPDATE_SUCCESS = '[users] update success',

  CLEAR_REGISTER_STATE = '[users] clear register state',
  LOGOUT = '[users] logout',
}

export class UsersListRequestAction implements Action {
  readonly type = UsersActionsTypes.USERS_LIST_REQUEST;

}

export class UsersUpdateRequestAction implements Action {
  readonly type = UsersActionsTypes.USERS_UPDATE_REQUEST;

  constructor(public payload: any) {
  }
}

export class LoginRequestAction implements Action {
  readonly type = UsersActionsTypes.LOGIN_REQUEST;


  constructor(public payload: any) {
  }
}

export class RegisterRequestAction implements Action {
  readonly type = UsersActionsTypes.REGISTER_REQUEST;


  constructor(public payload: any) {
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

export class UsersUpdateErrorAction implements Action {
  readonly type = UsersActionsTypes.USERS_UPDATE_ERROR;

  constructor(public payload: any) {
  }
}

export class LoginErrorAction implements Action {
  readonly type = UsersActionsTypes.LOGIN_ERROR;

  constructor(public payload: any) {
  }
}

export class RegisterErrorAction implements Action {
  readonly type = UsersActionsTypes.REGISTER_ERROR;

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

export class UsersUpdateSuccessAction implements Action {
  readonly type = UsersActionsTypes.USERS_UPDATE_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = UsersActionsTypes.LOGIN_SUCCESS;

  constructor(public payload: any) {
  }
}

export class RegisterSuccessAction implements Action {
  readonly type = UsersActionsTypes.REGISTER_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LogoutAction implements Action {
  readonly type = UsersActionsTypes.LOGOUT;

}
export class ClearRegisterAction implements Action {
  readonly type = UsersActionsTypes.CLEAR_REGISTER_STATE;

}

export type UsersActionsUnion =
  | UsersListRequestAction
  | UsersItemRequestAction
  | UsersListErrorAction
  | UsersItemErrorAction
  | UsersListSuccessAction
  | UsersItemSuccessAction
  | UsersUpdateRequestAction
  | UsersUpdateErrorAction
  | UsersUpdateSuccessAction
  | LoginErrorAction
  | LoginRequestAction
  | LoginSuccessAction
  | LogoutAction
  | RegisterRequestAction
  | RegisterErrorAction
  | RegisterSuccessAction
  | ClearRegisterAction;
