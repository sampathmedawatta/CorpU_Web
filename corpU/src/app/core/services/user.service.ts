import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { operationResult, auth, user, register } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api:ApiService) { }

    loginUser(auth : auth): Observable<operationResult> {
      return this.api
        .post<operationResult>('User/Login', auth)
        .pipe(map((response) => response));
    }

    getUserById(id: number): Observable<operationResult> {
      
      const params = new HttpParams()
      .set('id', id);
      return this.api
        .get<operationResult>('User/GetById',params)
        .pipe(map((response) => response));
    }

    getUserByEmail(email: string): Observable<operationResult> {
      
      const params = new HttpParams()
      .set('email', email);
      return this.api
        .get<operationResult>('User/GetByEmail',params)
        .pipe(map((response) => response));
    }
    
    geAllUsers(): Observable<operationResult> {
      return this.api
        .get<operationResult>('User/All')
        .pipe(map((response) => response));
    }

    postUser(user : register): Observable<operationResult> {
      return this.api
        .post<operationResult>('User/Register', user)
        .pipe(map((response) => response));
    }
}
