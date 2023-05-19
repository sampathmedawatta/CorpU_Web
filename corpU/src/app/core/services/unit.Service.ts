import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { operationResult, unit } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private api:ApiService) { }

  getUnitById(id: number): Observable<operationResult> {
    const params = new HttpParams()
    .set('id', id);
    return this.api
      .get<operationResult>('unit',params)
      .pipe(map((response) => response));
  }

  geAllUnits(): Observable<operationResult> {
    return this.api
      .get<operationResult>('unit')
      .pipe(map((response) => response));
  }

  postUnit(unit : unit): Observable<operationResult> {
    return this.api
      .post<operationResult>('unit',unit)
      .pipe(map((response) => response));
  }
}
