import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicant } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private api:ApiService) { }

  getApplicant(): Observable<applicant> {
    return this.api
      .get<applicant>('applicant')
      .pipe(map((response) => response));
  }

  geAllApplicantList(): Observable<applicant[]> {
    return this.api
      .get<applicant[]>('applicant')
      .pipe(map((response) => response));
  }

  postApplicant(applicant : applicant): Observable<any> {
    return this.api
      .post<any>('applicant',applicant)
      .pipe(map((response) => response));
  }
}
