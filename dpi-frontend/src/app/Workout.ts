import { Exercise } from "./Exercise";

export interface Workout {

    exerciseList : Exercise[];

    workoutName : String;
    workoutDesc : String;

    isComplete : boolean;

    intensityID? : number;
    workoutID? : number

}