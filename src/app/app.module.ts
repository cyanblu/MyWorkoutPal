import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EditWorkoutsComponent } from './edit-workouts/edit-workouts.component';
import {workoutFeatureKey, reducer} from './edit-workouts/edit-workouts.reducer';
import { WorkoutDifficultyDropdownComponent } from './workout-difficulty-dropdown/workout-difficulty-dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditWorkoutsComponent,
    WorkoutDifficultyDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(workoutFeatureKey, reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }