import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const COUNTER_KEY = 'counter';

export const plus = createAction('[COUNTER] plus');
export const minus = createAction('[COUNTER] minus');
export const reset = createAction('[COUNTER] reset');
export const changeUpdatedAt = createAction(
    '[COUNTER] change updated at',
    props<{ updatedAt: number }>()
);

export interface ICounterState {
    count: number,
    updatedAt?: number
}

export const initislState: ICounterState = {
    count: 0
}

export const counterReducer = createReducer(
    initislState,
    on(plus, state => ({
        ...state,
        count: state.count + 1
    })),
    on(minus, state => ({
        ...state,
        count: state.count - 1
    })),
    on(reset, state => ({
        ...state,
        count: 0
    })),
    on(changeUpdatedAt, (state, action)=>({
        ...state,
        updatedAt: action.updatedAt
    }))
)

export const featureSelector = createFeatureSelector<ICounterState>(COUNTER_KEY);

export const counterSelector = createSelector(
    featureSelector, state => state.count
)

export const updatedAtSelector = createSelector(
    featureSelector, state => state.updatedAt
)