import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { vacancyType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VacancyTypeService {

  constructor(private api:ApiService) { }

  getVacancyType(): Observable<vacancyType> {
    return this.api
      .get<vacancyType>('vacancyType')
      .pipe(map((response) => response));
  }

  geAllVacancyTypeList(): Observable<vacancyType[]> {
    return this.api
      .get<vacancyType[]>('vacancyType')
      .pipe(map((response) => response));
  }

  postVacancyType(vacancyType : vacancyType): Observable<any> {
    return this.api
      .post<any>('vacancyType',vacancyType)
      .pipe(map((response) => response));
  }
}

