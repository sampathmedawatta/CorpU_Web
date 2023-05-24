import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VacancyService, operationResult, user, vacancy } from 'src/app/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
 
  vacancies: vacancy[] = [];
  txt : string;
  constructor(private vacancyService:VacancyService,
    private route: ActivatedRoute){}
  ngOnInit(): void {

    this.route.queryParams
    .subscribe(params => {
      this.txt = params['txt'];
      this.checkSearchText();
    }
    );
  }


  checkSearchText(){
    if(this.txt != '' && this.txt != undefined){
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
