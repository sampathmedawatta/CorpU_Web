
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicantAvailability, operationResult } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantAvailabilityService {

  constructor(private api:ApiService) { }

  getApplicantAvailabilityByApplicantId(id: number): Observable<operationResult> {
    const params = new HttpParams()
      .set('id', id);
    return this.api
      .get<operationResult>('ApplicantAvailability/GetById',params)
      .pipe(map((response) => response));
  }

  geAllApplicantAvailabilityList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('ApplicantAvailability/All')
      .pipe(map((response) => response));
  }

  postApplicantAvailability(applicantAvailability : applicantAvailability): Observable<operationResult> {

    console.log(applicantAvailability);
    return this.api
      .post<operationResult>('ApplicantAvailability/Add',applicantAvailability)
      .pipe(map((response) => response));
  }

  updateApplicantAvailability(applicantAvailability : applicantAvailability): Observable<operationResult> {
    return this.api
      .put<operationResult>('ApplicantAvailability/Update',applicantAvailability)
      .pipe(map((response) => response));
  }
}