import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { userRole } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private api:ApiService) { }

  getUserRole(): Observable<userRole> {
    return this.api
      .get<userRole>('userRole')
      .pipe(map((response) => response));
  }

  geAllUserRoleList(): Observable<userRole[]> {
    return this.api
      .get<userRole[]>('userRole')
      .pipe(map((response) => response));
  }

  postUserRole(userRole : userRole): Observable<any> {
    return this.api
      .post<any>('userRole',userRole)
      .pipe(map((response) => response));
  }
}


