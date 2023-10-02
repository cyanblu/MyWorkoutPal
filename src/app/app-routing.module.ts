import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditWorkoutsComponent } from './edit-workouts/edit-workouts.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: "workouts", component: EditWorkoutsComponent },
  { path: "", component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
