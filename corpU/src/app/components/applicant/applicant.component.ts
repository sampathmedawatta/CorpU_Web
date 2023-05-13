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
 
  // vacancies: vacancy[] = [
  //   {
  //     vacancyId: 1,
  //     vacancyTypeId: 1,
  //     classTypeId: 1,
  //     empId: 1,
  //     unitId: 1,
  //     title: 'Software Quality and Testing - Tutor',
  //     description: 'We are looking for a Software Quality and Testing - Tutor',
  //     publishDate: new Date('2023-05-01'),
  //     closingDate: new Date('2023-05-31'),
  //     status: true
  //   },
  //   {
  //     vacancyId: 2,
  //     vacancyTypeId: 2,
  //     classTypeId: 2,
  //     empId: 2,
  //     unitId: 2,
  //     title: 'Software Quality and Testing - Tutor',
  //     description: 'We are seeking a Software Quality and Testing - Tutor',
  //     publishDate: new Date('2023-05-01'),
  //     closingDate: new Date('2023-05-31'),
  //     status: true
  //   },
  // ];

  getVacancyDetails(vacancyId: number): {id: number, title: string, closingDate: Date} | null {
    const vacancy = this.vacancies.find(v => v.vacancyId === vacancyId);
    if (vacancy) {
      return {
        id: vacancy.vacancyId,
        title: vacancy.title,
        closingDate: vacancy.closingDate
      };
    } else {
      return null;
    }
  }
}
