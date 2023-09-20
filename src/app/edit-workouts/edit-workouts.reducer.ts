import { Action, createReducer, on } from '@ngrx/store';
import * as WorkoutActions from './edit-workouts.actions';
import { Workout } from './workout';

export const workoutFeatureKey = 'workout';

export interface WorkoutState {

    workouts: Workout[];
}

export const initialState: WorkoutState = {

    workouts: []

};

export const workoutReducer = createReducer(
    initialState,
    on(
        WorkoutActions.addWorkout,
        (state: WorkoutState, { workout }) => ({
            ...state,
            workouts: [...state.workouts, workout]
        })
    )

);

export function reducer(state: WorkoutState | undefined, action: Action): any {
    return workoutReducer(state, action);
}

