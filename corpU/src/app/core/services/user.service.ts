import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api:ApiService) { }

    getUser(): Observable<user> {
      return this.api
        .get<user>('user')
        .pipe(map((response) => response));
    }
  
    geAllUsers(): Observable<user[]> {
      return this.api
        .get<user[]>('user')
        .pipe(map((response) => response));
    }

    postUser(user : user): Observable<any> {
      return this.api
        .post<any>('user',user)
        .pipe(map((response) => response));
    }
}
