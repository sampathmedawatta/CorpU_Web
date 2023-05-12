import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicantContactDetail } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ApplicantContactDetailService {

  constructor(private api:ApiService) { }

  getApplicantContactDetail(): Observable<applicantContactDetail> {
    return this.api
      .get<applicantContactDetail>('applicantContactDetail')
      .pipe(map((response) => response));
  }

  geAllApplicantContactDetailList(): Observable<applicantContactDetail[]> {
    return this.api
      .get<applicantContactDetail[]>('applicantContactDetail')
      .pipe(map((response) => response));
  }

  postApplicantContactDetail(applicantContactDetail : applicantContactDetail): Observable<any> {
    return this.api
      .post<any>('applicantContactDetail',applicantContactDetail)
      .pipe(map((response) => response));
  }
}
