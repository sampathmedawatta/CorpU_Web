import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { classType, operationResult } from '../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassTypeService {

  constructor(private api:ApiService) { }

  getClassTypeById(id: number): Observable<operationResult> {
    const params = new HttpParams()
    .set('id', id);
    return this.api
      .get<operationResult>('ClassType/GetById',params)
      .pipe(map((response) => response));
  }

  geAllClassTypeList(): Observable<operationResult> {
    return this.api
      .get<operationResult>('ClassType/All')
      .pipe(map((response) => response));
  }

  postClassType(classType : classType): Observable<operationResult> {
    return this.api
      .post<operationResult>('ClassType/Add',classType)
      .pipe(map((response) => response));
  }
}
