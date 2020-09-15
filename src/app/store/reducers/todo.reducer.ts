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
      return RequestStatus.pending;
    case TodosActionsTypes.TODOS_LIST_ERROR:
      return RequestStatus.error;
    case TodosActionsTypes.TODOS_LIST_SUCCESS:
      return RequestStatus.success;
    default:
      return state;
  }
};

const items = (state = null, action: TodosActionsUnion) => {
  switch (action.type) {
    case TodosActionsTypes.TODOS_LIST_SUCCESS:
      console.log(action.payload);
      return action.payload;
    case TodosActionsTypes.TODOS_LIST_REQUEST:
      return null;
    default:
      return state;
  }
};

// const active = (state = null, action: TodosActionsUnion) => {
//   switch (action.type) {
//     case TodosActionsTypes.TODOS_LIST_SUCCESS:
//       console.log(action.payload);
//       return action.payload;
//     case TodosActionsTypes.TODOS_LIST_REQUEST:
//       return null;
//     default:
//       return state;
//   }
// };




export const todosReduce = combineReducers({
  items,
  status,
  // active
});
