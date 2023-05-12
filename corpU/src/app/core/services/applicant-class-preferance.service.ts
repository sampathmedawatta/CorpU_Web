import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { applicantClassPreferance } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApplicantClassPreferanceService {

  constructor(private api:ApiService) { }

  getApplicantClassPreferance(): Observable<applicantClassPreferance> {
    return this.api
      .get<applicantClassPreferance>('applicantClassPreferance')
      .pipe(map((response) => response));
  }

  geAllApplicantClassPreferanceList(): Observable<applicantClassPreferance[]> {
    return this.api
      .get<applicantClassPreferance[]>('applicantClassPreferance')
      .pipe(map((response) => response));
  }

  postApplicantClassPreferance(applicantClassPreferance : applicantClassPreferance): Observable<any> {
    return this.api
      .post<any>('applicantClassPreferance',applicantClassPreferance)
      .pipe(map((response) => response));
  }
}
