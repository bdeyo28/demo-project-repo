import { Exercise } from "./Exercise";

export interface Workout {

    exerciseList : Exercise[];

    workoutName : string;
    workoutDescription : string;

    isComplete : boolean;

    intensityID? : number;
    workoutID? : number

}