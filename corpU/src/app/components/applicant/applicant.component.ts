import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VacancyService, operationResult, user, vacancy } from 'src/app/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {

  vacancies: vacancy[] = [];
  txt : string;
  constructor(private vacancyService:VacancyService,
    private route: ActivatedRoute){}
  ngOnInit(): void {

    this.txt  = this.route.snapshot.paramMap.get('txt') || '';
    
    if(this.txt != ''){
      this.getVacancyListByText();
    }
    else{
    this.getVacancyList();
    }
  }

getVacancyListByText(){
  this.vacancyService.getVacancyListByText(this.txt).subscribe({
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
