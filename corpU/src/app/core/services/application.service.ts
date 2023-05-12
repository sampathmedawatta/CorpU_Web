import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { application } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private api:ApiService) { }

  getApplication(): Observable<application> {
    return this.api
      .get<application>('application')
      .pipe(map((response) => response));
  }

  geAllApplicationList(): Observable<application[]> {
    return this.api
      .get<application[]>('application')
      .pipe(map((response) => response));
  }

  postApplication(application : application): Observable<any> {
    return this.api
      .post<any>('application',application)
      .pipe(map((response) => response));
  }
}
