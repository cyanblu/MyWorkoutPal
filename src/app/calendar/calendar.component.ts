import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Exercise } from './exercise';
import { select, Store } from '@ngrx/store';
import { selectAllExercises, selectExerciseByDate } from './exercise.selector';
import { ExerciseState } from './exercise.reducer';
import { addExercise, removeExercise } from './exercise.actions';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  exercises$: Observable<Exercise[]>;

  public currentExercise: Observable<Exercise | undefined> = new Observable(undefined);

  constructor(private store: Store<ExerciseState>) {
    this.exercises$ = this.store.pipe(select(selectAllExercises));
  }

  selectDay(date: Date | Date[]) {
    if (!(date instanceof Date)) return;
    date as Date;
    this.currentExercise = this.store.pipe(select(selectExerciseByDate(date)))
    console.log(this.currentExercise);
  }

  // private sameDay(d1: Date, d2: Date) {
  //   return d1.getFullYear() === d2.getFullYear() &&
  //     d1.getMonth() === d2.getMonth() &&
  //     d1.getDate() === d2.getDate();
  // }

}
