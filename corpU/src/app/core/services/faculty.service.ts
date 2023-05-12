import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { faculty } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private api:ApiService) { }

  getFaculty(): Observable<faculty> {
    return this.api
      .get<faculty>('faculty')
      .pipe(map((response) => response));
  }

  geAllFacultyList(): Observable<faculty[]> {
    return this.api
      .get<faculty[]>('faculty')
      .pipe(map((response) => response));
  }

  postFaculty(faculty : faculty): Observable<any> {
    return this.api
      .post<any>('faculty',faculty)
      .pipe(map((response) => response));
  }
}

