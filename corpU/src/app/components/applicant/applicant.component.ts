import { Component } from '@angular/core';
import {VacancyService, operationResult, user, vacancy } from 'src/app/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {

  vacancies: vacancy[] = [];
  constructor(private vacancyService:VacancyService){}
  ngOnInit(): void {
    
    this.getVacancyList();
  }

getVacancyList() {
  this.vacancyService.geAllVacancyList().subscribe({
    next: (result: operationResult) => {
    this.vacancies = result.data;
    },
    error: (error) => {
      if (error.status == 400) {
        console.error('Incorrect details');
      } else {
        console.error('There was an error!', error);
      }
    }
  });
}

}
