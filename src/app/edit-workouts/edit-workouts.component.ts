import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout, WorkoutDifficulty, workoutDifficultyToTextMapping } from './workout';
import { select, Store } from '@ngrx/store';
import { selectAllWorkouts } from './edit-workouts.selector';
import { WorkoutState } from './edit-workouts.reducer';
import { ExerciseState } from '../calendar/exercise.reducer';
import { addWorkout, removeWorkout } from './edit-workouts.actions';
import { removeExercisesWithWorkout } from '../calendar/exercise.actions';


@Component({
    selector: 'app-edit-workouts',
    templateUrl: './edit-workouts.component.html',
    styleUrls: ['./edit-workouts.component.css']
})
export class EditWorkoutsComponent {

    workouts$: Observable<Workout[]>;

    public difficultyMapping = workoutDifficultyToTextMapping;

    constructor(private workoutStore: Store<WorkoutState>, private exerciseStore: Store<ExerciseState>) {
        this.workouts$ = this.workoutStore.pipe(select(selectAllWorkouts))
    }

    addWorkout(workoutName: string, workoutDifficulty: number): void {
        const workout: Workout = {
            name: workoutName,
            difficulty: workoutDifficulty as WorkoutDifficulty
        };
        this.workoutStore.dispatch(addWorkout(workout));
    }

    removeWorkout(workout: Workout) {
        this.workoutStore.dispatch(removeWorkout(workout));
        this.exerciseStore.dispatch(removeExercisesWithWorkout(workout.name));
    }

}
