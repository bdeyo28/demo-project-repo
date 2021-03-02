import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workout } from './Workout';
import { Intensity } from './Intensity';

@Injectable({
  providedIn: 'root'
})
export class IntensityService {

  baseURL : String = "http://localhost:8080/api";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})};

  constructor(private http : HttpClient) { }

  getIntensity() : Observable<Intensity> {
    return this.http.get<Intensity>(this.baseURL + "/intensity/1");
  }

  getIntensityList() : Observable<Intensity[]> {
    return this.http.get<Intensity[]>(this.baseURL + "/list");
  }

}
