import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { employeeRole } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRoleService {

  constructor(private api:ApiService) { }

  getEmployeeRole(): Observable<employeeRole> {
    return this.api
      .get<employeeRole>('employeeRole')
      .pipe(map((response) => response));
  }

  geAllEmployeeRoleList(): Observable<employeeRole[]> {
    return this.api
      .get<employeeRole[]>('employeeRole')
      .pipe(map((response) => response));
  }

  postEmployeeRole(employeeRole : employeeRole): Observable<any> {
    return this.api
      .post<any>('employeeRole',employeeRole)
      .pipe(map((response) => response));
  }
}
