import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WarmUp } from './WarmUp';


@Injectable({
  providedIn: 'root'
})
export class WarmupService {

  baseURL : String = "http://localhost:8080/api";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})};


  constructor(private http : HttpClient) { }


  getAllWarmUps() : Observable<WarmUp[]>{
    return this.http.get<WarmUp[]>(this.baseURL + "/allWarmUps")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

}
