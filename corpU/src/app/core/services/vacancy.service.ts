import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { operationResult, vacancy } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private api:ApiService) { }


  getVacancyById(id : number): Observable<operationResult> {
    console.log( id);
    const params = new HttpParams()
      .set('id', id);

    return this.api
      .get<operationResult>('vacancy/GetById',params)
      .pipe(map((response) => response));
  }

  getVacancyByUnitId(id : number): Observable<operationResult> {

    const params = new HttpParams()
      .set('vacancyId', id);

    return this.api
      .get<operationResult>('vacancy/GetByUnitId',params)
      .pipe(map((response) => response));
  }

  geAllVacancyList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('vacancy/All')
      .pipe(map((response) => response));
  }

  postVacancy(vacancy : vacancy): Observable<operationResult> {
    return this.api
      .post<operationResult>('vacancy/Add',vacancy)
      .pipe(map((response) => response));
  }
}

