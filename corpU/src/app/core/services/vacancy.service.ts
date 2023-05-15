import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { vacancy } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private api:ApiService) { }

  getVacancy(id : number): Observable<vacancy> {

    const params = new HttpParams()
      .set('vacancyId', id);

    return this.api
      .get<vacancy>('vacancy',params)
      .pipe(map((response) => response));
  }

  geAllVacancyList(): Observable<vacancy[]> {
    return this.api
      .get<vacancy[]>('vacancy')
      .pipe(map((response) => response));
  }

  postVacancy(vacancy : vacancy): Observable<any> {
    return this.api
      .post<any>('vacancy',vacancy)
      .pipe(map((response) => response));
  }
}

