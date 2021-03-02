import { Workout } from "./Workout";

export interface Intensity {

    workoutList? : Workout[];

    intensityName : String;
    intensityDuration : String;
    intensityDescription :  String;

    intensityID? : number;

}