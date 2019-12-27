import { Injectable, Inject, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'; export const apiUrl = environment.apiUrl;

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User} from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  @Inject(apiUrl) private apiUrl: string;
  private registerUrl: String = apiUrl+"/register";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

//Add a new user to the database
addUser(user: User): Observable<User>{
  return this.http.post<User>(this.apiUrl, user, this.httpOptions).pipe(tap(data => console.log(data)), catchError(this.handleError<User>('addUser')));
}

// getUser(id:number):Observable<User>{

// }

//saveUser()

/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}