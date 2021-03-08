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

  // getIsCompleted() : Observable<boolean> {
  //   return this.http.get<boolean>(this.baseURL + "/exercise/{exerciseID}")
  //   .pipe(
  //     tap(x => console.log(x)),
  //     catchError(err => {
  //       console.log(err);
  //       return of(null);
  //     })
  //   );
  // }


}
