
export enum WorkoutDifficulty {
    EASY, MEDIUM, HARD, 
}

export interface Workout {
    name: string;
    difficulty: WorkoutDifficulty;
}
