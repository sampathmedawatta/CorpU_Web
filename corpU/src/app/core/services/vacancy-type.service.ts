import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { operationResult, vacancyType } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyTypeService {

  constructor(private api:ApiService) { }

  getVacancyTypeById(id: number): Observable<operationResult> {
    const params = new HttpParams()
    .set('id', id);
    return this.api
      .get<operationResult>('VacancyType/GetById',params)
      .pipe(map((response) => response));
  }

  geAllVacancyTypeList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('VacancyType/All')
      .pipe(map((response) => response));
  }

  postVacancyType(vacancyType : vacancyType): Observable<operationResult> {
    return this.api
      .post<operationResult>('VacancyType/Add',vacancyType)
      .pipe(map((response) => response));
  }
}

