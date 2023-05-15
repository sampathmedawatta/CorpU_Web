import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth, user } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api:ApiService) { }

    loginUser(auth : auth): Observable<user> {

      return this.api
        .post<user>('User', auth)
        .pipe(map((response) => response));
    }
    getUser(id: number): Observable<user> {
      
      const params = new HttpParams()
      .set('Id', id);

      return this.api
        .get<user>('User/GetById',params)
        .pipe(map((response) => response));
    }
  
    geAllUsers(): Observable<user[]> {
      return this.api
        .get<user[]>('users')
        .pipe(map((response) => response));
    }

    postUser(user : user): Observable<any> {
      return this.api
        .post<any>('users',user)
        .pipe(map((response) => response));
    }
}
