import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { qualificationType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QualificationTypeService {

  constructor(private api:ApiService) { }

  getQualificationType(): Observable<qualificationType> {
    return this.api
      .get<qualificationType>('qualificationType')
      .pipe(map((response) => response));
  }

  geAllQualificationTypeList(): Observable<qualificationType[]> {
    return this.api
      .get<qualificationType[]>('qualificationType')
      .pipe(map((response) => response));
  }

  postQualificationType(qualificationType : qualificationType): Observable<any> {
    return this.api
      .post<any>('qualificationType',qualificationType)
      .pipe(map((response) => response));
  }
}


