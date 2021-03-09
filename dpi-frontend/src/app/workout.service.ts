import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from './Workout';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from './Exercise';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  baseURL : String = "http://localhost:8080/api";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})};

  constructor(private http : HttpClient, private router : ActivatedRoute) {
   }

   getWorkoutByID(id : number) : Observable<Workout> {
    return this.http.get<Workout>(this.baseURL + "/workout/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  };

  addWorkout(toAdd : Workout) : Observable<Workout> {
    return this.http.post<Workout>(this.baseURL + "/addWorkout", toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  };

  deleteWorkout(id : number) : Observable<Workout> {
    return this.http.delete<Workout>(this.baseURL + "/deleteWorkout/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  deleteExercisesFromWorkout(id : number) : Observable<Exercise[]> {
    return this.http.delete<Exercise[]>(this.baseURL + "/deleteWorkoutExercises/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    ); 
  }

  getWorkoutList(id : number) : Observable<Workout[]> {
    return this.http.get<Workout[]>(this.baseURL + "/workouts/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : Workout[] = [];
        return of(empty);
      })
    );
  };

}
