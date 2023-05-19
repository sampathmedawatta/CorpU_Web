import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { application, operationResult } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private api:ApiService) { }

  getApplicationByApplicantId(id: number): Observable<operationResult> {

    const params = new HttpParams()
    .set('id', id);
    return this.api
      .get<operationResult>('Application/GetByApplicantId',params)
      .pipe(map((response) => response));
  }

  getApplicationByApplicationId(id: number): Observable<operationResult> {

    const params = new HttpParams()
    .set('id', id);
    return this.api
      .get<operationResult>('Application/GetByApplicationId',params)
      .pipe(map((response) => response));
  }

  geAllApplicationList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('Application/All')
      .pipe(map((response) => response));
  }

  postApplication(application : application): Observable<operationResult> {
    return this.api
      .post<operationResult>('Application/Add',application)
      .pipe(map((response) => response));
  }
  updateApplication(application : application): Observable<operationResult> {
    return this.api
      .put<operationResult>('Application/Update',application)
      .pipe(map((response) => response));
  }
}
