
export enum WorkoutDifficulty {
    EASY, MEDIUM, HARD, 
}

export const workoutDifficultyToTextMapping: Record<string, string> = {
    [WorkoutDifficulty.EASY]: "easy",
    [WorkoutDifficulty.MEDIUM]: "medium",
    [WorkoutDifficulty.HARD]: "hard",
}

export interface Workout {
    name: string;
    difficulty: WorkoutDifficulty;
}
