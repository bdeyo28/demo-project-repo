import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { WarmUp } from './WarmUp';
import { Cooldown } from './Cooldown';

@Injectable({
  providedIn: 'root'
})
export class CooldownService {

  baseURL : String = "http://localhost:8080/api";

  httpOptions = {headers: new HttpHeaders({"Content-Type" : "application/json"})};

  constructor(private http : HttpClient) { }


  getAllCooldowns() : Observable<Cooldown[]> {
    return this.http.get<WarmUp[]>(this.baseURL + "/allCooldowns")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  getAllCooldownURLS() : Observable<string[]> {
    return this.http.get<string[]>(this.baseURL + "/allCooldownURLS")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }


}
