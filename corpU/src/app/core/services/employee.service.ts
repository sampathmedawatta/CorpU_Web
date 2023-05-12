import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { employee } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private api:ApiService) { }

  getEmployee(): Observable<employee> {
    return this.api
      .get<employee>('employee')
      .pipe(map((response) => response));
  }

  geAllEmployeeList(): Observable<employee[]> {
    return this.api
      .get<employee[]>('employee')
      .pipe(map((response) => response));
  }

  postEmployee(employee : employee): Observable<any> {
    return this.api
      .post<any>('employee',employee)
      .pipe(map((response) => response));
  }
}

