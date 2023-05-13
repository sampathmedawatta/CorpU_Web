import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth, user } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api:ApiService) { }

    loginUser(auth : auth): Observable<user> {
      return this.api
        .post<user>('user', auth)
        .pipe(map((response) => response));
    }
    getUser(): Observable<user> {
      
      //TODO set parameter
      return this.api
        .get<user>('user',)
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
