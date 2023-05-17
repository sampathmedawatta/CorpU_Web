import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicantContactDetail, operationResult } from '../models';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApplicantContactDetailService {

  constructor(private api:ApiService) { }

  getApplicantContactDetailByApplicantId(id: number): Observable<operationResult> {

    const params = new HttpParams()
      .set('id', id);
    return this.api
      .get<operationResult>('ApplicantContact/GetById',params)
      .pipe(map((response) => response));
  }

  geAllApplicantContactDetailList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('ApplicantContact/All')
      .pipe(map((response) => response));
  }

  postApplicantContactDetail(applicantContactDetail : applicantContactDetail): Observable<operationResult> {
    return this.api
      .post<operationResult>('ApplicantContact/Add',applicantContactDetail)
      .pipe(map((response) => response));
  }
}
