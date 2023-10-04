import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromWorkouts from './edit-workouts.reducer';

export const selectWorkoutState = createFeatureSelector<fromWorkouts.WorkoutState>(
  fromWorkouts.workoutFeatureKey,
);

export const selectAllWorkouts = createSelector(
  selectWorkoutState,
  (state: fromWorkouts.WorkoutState) => state.workouts
);

export const selectWorkoutByName = (name: String) => createSelector(
  selectWorkoutState,
  (state: fromWorkouts.WorkoutState) => state.workouts.find(w => w.name === name)
);
