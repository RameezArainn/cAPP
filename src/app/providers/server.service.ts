import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { GlobalVariable } from '../globals';
@Injectable({
  providedIn: 'root',
})
export class ServerService {
  // httpOptions: { headers: HttpHeaders };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  baseUrl = 'https://dataservice.accuweather.com/';

  constructor(private http: HttpClient, private globals: GlobalVariable) {}
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  public searchCity(city): Observable<any> {
    var link =
      this.baseUrl +
      'locations/v1/cities/search?apikey=g0UKmZr4Te01yWpY2E7wz5WiG6JljqoH&q=' +
      city;

    console.log(link);

    return this.http
      .get<any>(link, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  public getCityInfo(key): Observable<any> {
    var link =
      this.baseUrl +
      'forecasts/v1/daily/5day/' +
      key +
      '?apikey=g0UKmZr4Te01yWpY2E7wz5WiG6JljqoH';

    console.log(link);

    return this.http
      .get<any>(link, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  public autoComplete(text): Observable<any> {
    var link =
      this.baseUrl +
      'locations/v1/cities/autocomplete?apikey=g0UKmZr4Te01yWpY2E7wz5WiG6JljqoH&q=' +
      text;

    console.log(link);

    return this.http
      .get<any>(link, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
}
