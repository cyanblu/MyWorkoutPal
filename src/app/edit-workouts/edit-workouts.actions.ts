import { createAction, props } from '@ngrx/store';
import { Workout } from './workout';

export const addWorkout = createAction(
  '[Workout] Add Workout',
  (workout: Workout) => ({workout})
);

