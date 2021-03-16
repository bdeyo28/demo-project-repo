import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from './Workout';
import { Exercise } from './Exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  baseURL : String = "http://localhost:8080/api";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})};

  constructor(private http : HttpClient) { }

  getAllExercises() : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.baseURL + "/allExercises")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  getAllExerciseURLS(id : number) : Observable<String[]>{
    return this.http.get<String[]>(this.baseURL + "/allExerciseURLS/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  editExerciseByID(toEdit : Exercise, id : number) : Observable<Exercise> {
    return this.http.put<Exercise>(this.baseURL + "/editExercise/" + id, toEdit, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  getExerciseList(id : number) : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.baseURL + "/exercises/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  getExerciseByID(id : number) : Observable<Exercise> {
    return this.http.get<Exercise>(this.baseURL + "/getExercise/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );;
  }

  addExerciseToWorkout(toAdd : Exercise, id : number) : Observable<Exercise>
  {
    return this.http.post<Exercise>(this.baseURL+ "/addToWorkout/" + id, toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  addExercise(toAdd : Exercise) : Observable<Exercise> {
    return this.http.post<Exercise>(this.baseURL + "/addExercise", toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  deleteExerciseByID(id : number) : Observable<Exercise> {
    return this.http.delete<Exercise>(this.baseURL + "/deleteExercise/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

}
