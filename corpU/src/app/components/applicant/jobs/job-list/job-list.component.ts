import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService, operationResult, vacancy } from 'src/app/core';

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
    
    this.txt  = this.route.snapshot.paramMap.get('txt') || '';
    console.log('dfdfdfd');
    console.log(this.txt);
    if(this.txt != null || this.txt != ''){

    }
    else{
      this.getVacancyList();
    }
    
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
