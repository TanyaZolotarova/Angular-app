import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import {storeFreeze} from 'ngrx-store-freeze';

import {localStorageSync} from 'ngrx-store-localstorage';
import {environment} from '../../../environments/environment.prod';
import {todosReduce} from './todo.reducer';
import {userReduce} from './user.reducer';
// import {environment} from '../../../environments/environment';
// import {reducer} from './app.reducer';
// import {collectionsReduce} from './collection.reducer';
// import {productsReduce} from './products.reducer';
// import {ordersReduce} from './orders.reducer';
// import {userReduce} from "./users.reducer";

/**
 * he reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: Object.keys(reducers), rehydrate: true})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer, storeFreeze];

// tslint:disable-next-line:no-empty-interface
export interface AppState{
  // router: fromRouter.RouterReducerState;
  // app: appReducer.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<AppState> = {
    todos: todosReduce,
    users: userReduce
};

