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
            exercises: state.exercises.filter(e => e !== exercise)
        })
    ),

    on(
        ExerciseActions.removeExerciseFromDay,
        (state: ExerciseState, { day }) => ({
            ...state,
            exercises: state.exercises.filter(e => {
                return !(e.date.getFullYear() === day.getFullYear() &&
                e.date.getMonth() === day.getMonth() &&
                e.date.getDate() === day.getDate());
            })
        })
    ),
    
    on(
        ExerciseActions.removeExercisesWithWorkout,
        (state: ExerciseState, { workoutName }) => ({
            ...state,
            exercises: state.exercises.filter(e => e.workoutName !== workoutName)
        })
    ),

);

export function reducer(state: ExerciseState | undefined, action: Action): any {
    return exerciseReducer(state, action);
}

