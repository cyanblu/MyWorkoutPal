import { Component } from '@angular/core';
import { WorkoutDifficulty, workoutDifficultyToTextMapping } from '../edit-workouts/workout';

@Component({
    selector: 'app-workout-difficulty-dropdown',
    templateUrl: './workout-difficulty-dropdown.component.html',
})
export class WorkoutDifficultyDropdownComponent {

    public mapping = workoutDifficultyToTextMapping;
    public difficulties = Object.values(WorkoutDifficulty).filter(value => typeof value === 'number') as number[];
    public selected: number = 0

}
