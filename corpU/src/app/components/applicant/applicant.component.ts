import { Component } from '@angular/core';
import {VacancyService, user, vacancy } from 'src/app/core';

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
    next: (result: any) => {
    this.vacancies = result;
    }});
}

}
