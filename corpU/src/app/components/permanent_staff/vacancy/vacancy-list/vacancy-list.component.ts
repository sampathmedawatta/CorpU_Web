import { Component } from '@angular/core';
import { VacancyService, operationResult, vacancy } from 'src/app/core';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent {

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
