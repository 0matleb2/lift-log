import type Exercise from "./Exercise";

export interface ExerciseSet {
	id: string;
	exercise: Exercise;
	weight: number;
	reps: number;
	date: string;
}
