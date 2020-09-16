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
      return RequestStatus.pending;
    case UsersActionsTypes.USERS_LIST_ERROR:
    case UsersActionsTypes.USERS_ITEM_ERROR:
      return RequestStatus.error;
    case UsersActionsTypes.USERS_LIST_SUCCESS:
    case UsersActionsTypes.USERS_ITEM_SUCCESS:
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
      return state;
    case UsersActionsTypes.USERS_LIST_REQUEST:
    case UsersActionsTypes.USERS_ITEM_REQUEST:
      return null;
    default:
      return state;
  }
};

const active = (state = null, action: UsersActionsUnion) => {
  switch (action.type) {
    case UsersActionsTypes.USERS_LIST_SUCCESS:
      console.log(action.payload);
      return action.payload;
    case UsersActionsTypes.USERS_LIST_REQUEST:
      return null;
    default:
      return state;
  }
};




export const todosReduce = combineReducers({
  items,
  status,
  active
});
