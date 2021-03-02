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

  getExerciseList() : Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.baseURL + "/exercises/{workoutID}");
  }

  getIsCompleted() : Observable<boolean> {
    return this.http.get<boolean>(this.baseURL + "/exercise/{exerciseID}");
  }


}
