import {combineReducers} from '@ngrx/store';
import {UsersActionsTypes, UsersActionsUnion} from '../actions/user.actions';

export enum RequestStatus {
  pending = 'pending',
  success = 'success',
  error = 'error',
}

const status = (state = null, action: UsersActionsUnion) => {
  switch (action.type) {
    case UsersActionsTypes.USERS_LIST_REQUEST:
    case UsersActionsTypes.USERS_ITEM_REQUEST:
    case UsersActionsTypes.USERS_UPDATE_REQUEST:
    case UsersActionsTypes.LOGIN_REQUEST:
    case UsersActionsTypes.REGISTER_REQUEST:
      return RequestStatus.pending;
    case UsersActionsTypes.USERS_LIST_ERROR:
    case UsersActionsTypes.USERS_ITEM_ERROR:
    case UsersActionsTypes.USERS_UPDATE_ERROR:
    case UsersActionsTypes.LOGIN_ERROR:
    case UsersActionsTypes.REGISTER_ERROR:
      return RequestStatus.error;
    case UsersActionsTypes.USERS_LIST_SUCCESS:
    case UsersActionsTypes.USERS_ITEM_SUCCESS:
    case UsersActionsTypes.USERS_UPDATE_SUCCESS:
    case UsersActionsTypes.LOGIN_SUCCESS:
    case UsersActionsTypes.REGISTER_SUCCESS:
      return RequestStatus.success;
    default:
      return state;
  }
};

const items = (state = null, action: UsersActionsUnion) => {
  switch (action.type) {
    case UsersActionsTypes.USERS_LIST_SUCCESS:
      return action.payload;
    case UsersActionsTypes.USERS_ITEM_SUCCESS:
    case UsersActionsTypes.USERS_UPDATE_SUCCESS:
      return state;
    case UsersActionsTypes.USERS_LIST_REQUEST:
    case UsersActionsTypes.USERS_ITEM_REQUEST:
    case UsersActionsTypes.USERS_UPDATE_REQUEST:
      return null;
    default:
      return state;
  }
};


const active = (state = null, action: UsersActionsUnion) => {
  switch (action.type) {
    case UsersActionsTypes.LOGIN_SUCCESS:
      // case UsersActionsTypes.REGISTER_SUCCESS:
      console.log('LOGIN_SUCCESS', action.payload);
      return action.payload.user;
    case UsersActionsTypes.LOGOUT:
    // case UsersActionsTypes.LOGIN_REQUEST:
       case UsersActionsTypes.REGISTER_REQUEST:
      return null;
    default:
      return state;
  }
};

const register = (state = null, action: UsersActionsUnion) => {
  switch (action.type) {
    case UsersActionsTypes.REGISTER_SUCCESS:
      return 'success';
    case UsersActionsTypes.CLEAR_REGISTER_STATE:
    case UsersActionsTypes.REGISTER_REQUEST:
      return null;
    default:
      return state;
  }
};


export const userReduce = combineReducers({
  items,
  status,
  active,
  register
});
