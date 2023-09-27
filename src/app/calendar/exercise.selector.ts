
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromExercises from './exercise.reducer';

export const selectExercisesState = createFeatureSelector<fromExercises.ExerciseState>(
  fromExercises.exerciseFeatureKey,
);

export const selectAllExercises = createSelector(
  selectExercisesState,
  (state: fromExercises.ExerciseState) => state.exercises
);

export const selectExerciseByDate = (search: Date) => createSelector(
  selectExercisesState,
  (state: fromExercises.ExerciseState) => state.exercises.find(e => {
    return e.date.getFullYear() === search.getFullYear() &&
      e.date.getMonth() === search.getMonth() &&
      e.date.getDate() === search.getDate();
  })
);
