import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Exercise } from './exercise';
import { select, Store } from '@ngrx/store';
import { selectAllExercises, selectExerciseByDate } from './exercise.selector';
import { ExerciseState } from './exercise.reducer';
import { Workout } from "../edit-workouts/workout";
import { selectAllWorkouts } from '../edit-workouts/edit-workouts.selector';
import { addExercise, removeExercise } from './exercise.actions';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  exercises$: Observable<Exercise[]>;

  workouts$: Observable<Workout[]>;

  public currentExercise: Observable<Exercise | undefined> = new Observable(undefined);

  constructor(private exerciseStore: Store<ExerciseState>, private workoutStore: Store<ExerciseState>) {
    this.exercises$ = this.exerciseStore.pipe(select(selectAllExercises));
    this.workouts$ = this.workoutStore.pipe(select(selectAllWorkouts))
  }

  selectDay(date: Date | Date[]) {
    if (!(date instanceof Date)) return;
    date as Date;
    this.currentExercise = this.exerciseStore.pipe(select(selectExerciseByDate(date)))
    console.log(this.currentExercise);
  }

  // private sameDay(d1: Date, d2: Date) {
  //   return d1.getFullYear() === d2.getFullYear() &&
      // d1.getMonth() === d2.getMonth() &&
  //     d1.getDate() === d2.getDate();
  // }

}
