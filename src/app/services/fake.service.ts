import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FakeService {
 constructor(private httpclient: HttpClient ) { }
 getDataV1(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.httpclient.get(url)
 }
 getDataV2(): Observable<any> {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  return this.httpclient.get(url).pipe(
    tap(data => console.log('Date Fetched', data)),
    catchError(this.handleError('Failed to fetch data'))
  )}

  private handleError<T>(operation ='operation' ) {
    return (error : HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log
    }
  }
}
