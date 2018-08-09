import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
// import { Product } from '../classes/product';

@Injectable()
export class DataService {
  private baseURL;
  constructor(private httpClient: HttpClient) {
    // this.baseURL = environment.baseApiURL;
  }

  getBMIReadings() {
    // https://api.humanapi.co/v1/human/bmi/readings?access_token=demo
    return this.httpClient.get<any[]>('http://localhost:3000/reading').pipe(
      catchError(this.handleError)
    );
  }

  getBasicDetails() {
    return this.httpClient.get<any>('http://localhost:3000/details').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
