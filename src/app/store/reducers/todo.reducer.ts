import {combineReducers} from '@ngrx/store';
import {TodosActionsTypes, TodosActionsUnion} from '../actions/todo.action';

export enum RequestStatus {
  pending = 'pending',
  success = 'success',
  error = 'error',
}

const status = (state = null, action: TodosActionsUnion) => {
  switch (action.type) {
    case TodosActionsTypes.TODOS_LIST_REQUEST:
    case TodosActionsTypes.TODOS_REMOVE_REQUEST:
    case TodosActionsTypes.TODOS_UPDATE_REQUEST:
    case TodosActionsTypes.TODOS_ADD_REQUEST:
      return RequestStatus.pending;
    case TodosActionsTypes.TODOS_LIST_ERROR:
    case TodosActionsTypes.TODOS_REMOVE_ERROR:
    case TodosActionsTypes.TODOS_UPDATE_ERROR:
    case TodosActionsTypes.TODOS_ADD_ERROR:
      return RequestStatus.error;
    case TodosActionsTypes.TODOS_LIST_SUCCESS:
    case TodosActionsTypes.TODOS_REMOVE_SUCCESS:
    case TodosActionsTypes.TODOS_UPDATE_SUCCESS:
    case TodosActionsTypes.TODOS_ADD_SUCCESS:
      return RequestStatus.success;
    default:
      return state;
  }
};

const items = (state = [], action: TodosActionsUnion) => {
  switch (action.type) {
    case TodosActionsTypes.TODOS_LIST_SUCCESS:
      return action.payload.tasks;

    case TodosActionsTypes.TODOS_REMOVE_SUCCESS:
      return [...state].filter(item => item.id !== +action.payload);

    case TodosActionsTypes.TODOS_ADD_SUCCESS:
      return [...state, action.payload];

    case TodosActionsTypes.TODOS_LIST_REQUEST:
      return [];
    default:
      return state;
  }
};


export const todosReduce = combineReducers({
  items,
  status
});
