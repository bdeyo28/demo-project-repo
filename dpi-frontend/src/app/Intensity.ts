import { Workout } from "./Workout";

export interface Intensity {

    workoutList? : Workout[];

    intensityName : string;
    intensityDuration : string;
    intensityDescription :  string;

    intensityID? : number;

}