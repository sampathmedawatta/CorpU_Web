import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { classType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ClassTypeService {

  constructor(private api:ApiService) { }

  getClassType(): Observable<classType> {
    return this.api
      .get<classType>('classType')
      .pipe(map((response) => response));
  }

  geAllClassTypeList(): Observable<classType[]> {
    return this.api
      .get<classType[]>('classType')
      .pipe(map((response) => response));
  }

  postClassType(classType : classType): Observable<any> {
    return this.api
      .post<any>('classType',classType)
      .pipe(map((response) => response));
  }
}
