import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IPromos } from './promos';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromosService {
  private promosUrl = 'api/products/promos.json';
  constructor(private http: HttpClient) { }
  getPromos(): Observable<IPromos[]>{
    return this.http.get<IPromos[]>(this.promosUrl).pipe(
      tap(data => console.log("All promos")),
      catchError(this.handleError)
    )
  }
  private handleError(err: HttpErrorResponse ) {
    let errorMessage = '';
    if( err.error instanceof ErrorEvent ){
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}
