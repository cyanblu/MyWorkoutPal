import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromWorkouts from './edit-workouts.reducer';

export const selectCustomerState = createFeatureSelector<fromWorkouts.WorkoutState>(
  fromWorkouts.workoutFeatureKey,
);

export const selectAllWorkouts = createSelector(
  selectCustomerState,
  (state: fromWorkouts.WorkoutState) => state.workouts
);
