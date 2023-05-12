import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicantAvailability } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApplicantAvailabilityService {

  constructor(private api:ApiService) { }

  getApplicantAvailability(): Observable<applicantAvailability> {
    return this.api
      .get<applicantAvailability>('applicantAvailability')
      .pipe(map((response) => response));
  }

  geAllApplicantAvailabilityList(): Observable<applicantAvailability[]> {
    return this.api
      .get<applicantAvailability[]>('applicantAvailability')
      .pipe(map((response) => response));
  }

  postApplicantAvailability(applicantAvailability : applicantAvailability): Observable<any> {
    return this.api
      .post<any>('applicantAvailability',applicantAvailability)
      .pipe(map((response) => response));
  }
}
