import { Workout } from "../edit-workouts/workout";

export interface Exercise {
    workout: Workout,
    sets: number[],
    date: Date
}
