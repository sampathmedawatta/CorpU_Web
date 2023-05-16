import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'ApiKey':'1234567890'
      })
  }

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http
      .get<T>(`${environment.api_url}${path}`, { params, headers: this.httpOptions.headers })
      .pipe(catchError(this.formatErrors));
  }

  put<T>(path: string, body: Object = {}): Observable<T> {
    return this.http
      .put<T>(`${environment.api_url}${path}`, JSON.stringify(body),this.httpOptions)
      .pipe(catchError(this.formatErrors));
  }

  post<T>(path: string, body: Object = {}): Observable<T> {
    return this.http
      .post<T>(`${environment.api_url}${path}`, JSON.stringify(body),  this.httpOptions)
      .pipe(catchError(this.formatErrors));
  }


  delete<T>(path: string): Observable<T> {
    return this.http
      .delete<T>(`${environment.api_url}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}

