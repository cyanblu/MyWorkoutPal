import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout, WorkoutDifficulty } from './workout';
import { select, Store } from '@ngrx/store';
import { selectAllWorkouts } from './edit-workouts.selector';
import { WorkoutState } from './edit-workouts.reducer';
import { addWorkout } from './edit-workouts.actions';



@Component({
    selector: 'app-edit-workouts',
    templateUrl: './edit-workouts.component.html',
    styleUrls: ['./edit-workouts.component.css']
})
export class EditWorkoutsComponent {

    workouts$: Observable<Workout[]>;

    constructor(private store: Store<WorkoutState>) {
        this.workouts$ = this.store.pipe(select(selectAllWorkouts))
    }

    addWorkout(workoutName: string): void {
        const workout: Workout = {
            name: workoutName,
            difficulty: WorkoutDifficulty.EASY
        };
        this.store.dispatch(addWorkout(workout));
        console.log("hi");
        this.workouts$.forEach(w => console.log(w));
    }

}
