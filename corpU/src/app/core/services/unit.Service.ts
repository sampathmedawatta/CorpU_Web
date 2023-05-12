import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { unit } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private api:ApiService) { }

  getUnit(): Observable<unit> {
    return this.api
      .get<unit>('unit')
      .pipe(map((response) => response));
  }

  geAllUnits(): Observable<unit[]> {
    return this.api
      .get<unit[]>('unit')
      .pipe(map((response) => response));
  }

  postUnit(unit : unit): Observable<any> {
    return this.api
      .post<any>('unit',unit)
      .pipe(map((response) => response));
  }
}
