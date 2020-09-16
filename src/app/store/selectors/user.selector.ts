import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectUsersState = createFeatureSelector('users');
export const selectUsersItems = createSelector(selectUsersState, (state: any) => state.items);
export const selectUsersStatus = createSelector(selectUsersState, (state: any) => state.status);
export const selectActive = createSelector(selectUsersState, (state: any) => state.active);
