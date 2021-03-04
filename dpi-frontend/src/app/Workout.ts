import { Exercise } from "./Exercise";

export interface Workout {

    exerciseList : Exercise[];

    workoutName : string;
    workoutDesc : string;

    isComplete : boolean;

    intensityID? : number;
    workoutID? : number

}