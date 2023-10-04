import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Exercise } from './exercise';
import { select, Store } from '@ngrx/store';
import { selectAllExercises, selectExerciseByDate } from './exercise.selector';
import { ExerciseState } from './exercise.reducer';
import { Workout, WorkoutDifficulty, workoutDifficultyToTextMapping } from "../edit-workouts/workout";
import { selectAllWorkouts, selectWorkoutByName } from '../edit-workouts/edit-workouts.selector';
import { addExercise, removeExercise, removeExerciseFromDay } from './exercise.actions';
import { DateRangeType, IgxCalendarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar', { static: true })
  public calendar: IgxCalendarComponent | null = null;

  exercises$: Observable<Exercise[]>;

  workouts$: Observable<Workout[]>;

  public currentExercise: Observable<Exercise | undefined> = new Observable(undefined);
  public currentWorkout: Observable<Workout | undefined> = new Observable(undefined);

  public currentDate: Date | null = null;

  public difficultyMapping = workoutDifficultyToTextMapping;

  constructor(private exerciseStore: Store<ExerciseState>, private workoutStore: Store<ExerciseState>) {
    this.exercises$ = this.exerciseStore.pipe(select(selectAllExercises));
    this.workouts$ = this.workoutStore.pipe(select(selectAllWorkouts));
  }

  ngOnInit(): void {
    this.exercises$.subscribe(exercises => {
      this.calendar!.specialDates = [
        { type: DateRangeType.Specific, dateRange: exercises.map(e => e.date) }
      ];
    });
  }

  selectDay(date: Date | Date[]) {
    if (!(date instanceof Date)) return;
    date as Date;
    this.currentDate = date;
    this.currentExercise = this.exerciseStore.pipe(select(selectExerciseByDate(date)));
    this.currentExercise.subscribe(value => {
      if (!value) return;
      this.currentWorkout = this.workoutStore.select(selectWorkoutByName(value.workoutName));
    });
  }

  addExercise(workoutName: String) {
    const exercise: Exercise = {
      date: this.currentDate!,
      sets: [],
      workoutName: workoutName 
    };
    this.exerciseStore.dispatch(addExercise(exercise));
  }

  removeExercise() {
    if (!this.currentDate) return;
    this.exerciseStore.dispatch(removeExerciseFromDay(this.currentDate))
  }

}
