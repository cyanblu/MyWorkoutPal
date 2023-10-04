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

export const removeExerciseFromDay = createAction(
  "[Exercise] Remove Exercise from Day",
  (day: Date) => ({day})
)

export const removeExercisesWithWorkout = createAction(
  "[Exercise] Remove Exercises with Workout",
  (workoutName: String) => ({workoutName})
)
