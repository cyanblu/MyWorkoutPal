import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EditWorkoutsComponent } from './edit-workouts/edit-workouts.component';
import { workoutFeatureKey, reducer as workoutReducer } from './edit-workouts/edit-workouts.reducer';
import { exerciseFeatureKey, reducer as exerciseReducer } from './calendar/exercise.reducer';
import { WorkoutDifficultyDropdownComponent } from './workout-difficulty-dropdown/workout-difficulty-dropdown.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditWorkoutsComponent,
    WorkoutDifficultyDropdownComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(workoutFeatureKey, workoutReducer),
    StoreModule.forFeature(exerciseFeatureKey, exerciseReducer),
    BrowserAnimationsModule,
    IgxCalendarModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
