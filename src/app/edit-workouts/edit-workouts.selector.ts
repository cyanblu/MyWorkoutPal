import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromWorkouts from './edit-workouts.reducer';

export const selectWorkoutState = createFeatureSelector<fromWorkouts.WorkoutState>(
  fromWorkouts.workoutFeatureKey,
);

export const selectAllWorkouts = createSelector(
  selectWorkoutState,
  (state: fromWorkouts.WorkoutState) => state.workouts
);
