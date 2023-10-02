import { Action, createReducer, on } from '@ngrx/store';
import * as ExerciseActions from './exercise.actions';
import { Exercise } from './exercise';

export const exerciseFeatureKey = 'exercise';

export interface ExerciseState {

    exercises: Exercise[];
}

export const initialState: ExerciseState = {

    exercises: []

};

export const exerciseReducer = createReducer(
    initialState,
    on(
        ExerciseActions.addExercise,
        (state: ExerciseState, { exercise }) => ({
            ...state,
            exercises: [...state.exercises, exercise]
        })
    ),
    
    on(
        ExerciseActions.removeExercise,
        (state: ExerciseState, { exercise }) => ({
            ...state,
            workouts: state.exercises.filter(e => e !== exercise)
        })
    )

);

export function reducer(state: ExerciseState | undefined, action: Action): any {
    return exerciseReducer(state, action);
}

