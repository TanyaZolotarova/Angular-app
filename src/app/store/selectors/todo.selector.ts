import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectTodosState = createFeatureSelector('todos');
export const selectProductsItems = createSelector(selectTodosState, (state: any) => state.items);
export const selectProductsStatus = createSelector(selectTodosState, (state: any) => state.status);

