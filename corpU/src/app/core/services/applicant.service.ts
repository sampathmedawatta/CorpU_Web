import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicant, operationResult } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private api:ApiService) { }

  getApplicant(id: number): Observable<operationResult> {
    const params = new HttpParams()
    .set('id', id);
    return this.api
      .get<operationResult>('Applicant/GetById',params)
      .pipe(map((response) => response));
  }

  getApplicantByUserId(id: number): Observable<operationResult> {
    const params = new HttpParams()
    .set('id', id);
    return this.api
      .get<operationResult>('Applicant/GetByUserId',params)
      .pipe(map((response) => response));
  }

  geAllApplicantList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('Applicant/All')
      .pipe(map((response) => response));
  }

  postApplicant(applicant : applicant): Observable<operationResult> {
    return this.api
      .post<operationResult>('Applicant/Add',applicant)
      .pipe(map((response) => response));
  }

  updateApplicant(applicant : applicant): Observable<operationResult> {
    return this.api
      .put<operationResult>('Applicant',applicant)
      .pipe(map((response) => response));
  }
}
