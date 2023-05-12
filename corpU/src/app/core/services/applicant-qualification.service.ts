import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicantQualification } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApplicantQualificationService {

  constructor(private api:ApiService) { }

  getApplicantQualification(): Observable<applicantQualification> {
    return this.api
      .get<applicantQualification>('applicantQualification')
      .pipe(map((response) => response));
  }

  geAllApplicantQualificationList(): Observable<applicantQualification[]> {
    return this.api
      .get<applicantQualification[]>('applicantQualification')
      .pipe(map((response) => response));
  }

  postApplicantQualification(applicantQualification : applicantQualification): Observable<any> {
    return this.api
      .post<any>('applicantQualification',applicantQualification)
      .pipe(map((response) => response));
  }
}
