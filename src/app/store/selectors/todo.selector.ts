import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectTodosState = createFeatureSelector('todos');
export const selectTodosItems = createSelector(selectTodosState, (state: any) => state.items);
export const selectTodosStatus = createSelector(selectTodosState, (state: any) => state.status);

