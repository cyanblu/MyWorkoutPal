import { createAction, props } from '@ngrx/store';
import { Exercise } from './exercise';

export const addExercise = createAction(
  '[Exercise] Add Exercise',
  (exercise: Exercise) => ({exercise})
);

export const removeExercise = createAction(
  "[Exercise] Remove Exercise",
  (exercise: Exercise) => ({exercise})
)
