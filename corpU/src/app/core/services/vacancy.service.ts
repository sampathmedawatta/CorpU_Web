import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { vacancy } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private api:ApiService) { }

  getVacancy(): Observable<vacancy> {
    return this.api
      .get<vacancy>('vacancy')
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

