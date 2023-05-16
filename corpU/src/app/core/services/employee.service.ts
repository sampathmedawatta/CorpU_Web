import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { employee, operationResult } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private api:ApiService) { }

  getEmployeeBuId(id : number): Observable<operationResult> {
    const params = new HttpParams()
      .set('id', id);
    return this.api
      .get<operationResult>('Employee/GetById',params)
      .pipe(map((response) => response));
  }

  getEmployeeByEmail(email : string): Observable<operationResult> {
    const params = new HttpParams()
      .set('email', email);
    return this.api
      .get<operationResult>('Employee/GetByEmail',params)
      .pipe(map((response) => response));
  }

  geAllEmployeeList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('Employee/All')
      .pipe(map((response) => response));
  }

  postEmployee(employee : employee): Observable<operationResult> {
    return this.api
      .post<operationResult>('Employee/Add',employee)
      .pipe(map((response) => response));
  }

  updateEmployee(employee : employee): Observable<operationResult> {
    return this.api
      .put<operationResult>('Employee/Update',employee)
      .pipe(map((response) => response));
  }
}

