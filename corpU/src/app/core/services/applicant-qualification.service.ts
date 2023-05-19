import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicantQualification, operationResult } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantQualificationService {

  constructor(private api:ApiService) { }

  getApplicantQualificationByApplicantId(id : number): Observable<operationResult> {

    const params = new HttpParams()
    .set('id', id);
   
    return this.api
      .get<operationResult>('ApplicantQualification/GetById', params)
      .pipe(map((response) => response));
  }

  geAllApplicantQualificationList(id : number): Observable<operationResult> {
    const params = new HttpParams()
    .set('id', id);

    return this.api
      .get<operationResult>('ApplicantQualification/GetAllById',params)
      .pipe(map((response) => response));
  }

  postApplicantQualification(applicantQualification : applicantQualification): Observable<operationResult> {
    return this.api
      .post<operationResult>('ApplicantQualification/Add',applicantQualification)
      .pipe(map((response) => response));
  }
}
