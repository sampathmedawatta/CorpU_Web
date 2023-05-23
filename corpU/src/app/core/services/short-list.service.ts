
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { operationResult, shortlist } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ShortListService {

  constructor(private api:ApiService) { }

  getShortListByApplicationId(id: number): Observable<operationResult> {

    const params = new HttpParams()
    .set('id', id);
    return this.api
      .get<operationResult>('Shortlist/GetByApplicationId',params)
      .pipe(map((response) => response));
  }

  geAllShortList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('Shortlist/All')
      .pipe(map((response) => response));
  }

  postShortList(shortList : shortlist): Observable<operationResult> {
    return this.api
      .post<operationResult>('Shortlist/Add',shortList)
      .pipe(map((response) => response));
  }
  
  updateShortList(shortList : shortlist): Observable<operationResult> {
    return this.api
      .put<operationResult>('Shortlist/Update',shortList)
      .pipe(map((response) => response));
  }
}