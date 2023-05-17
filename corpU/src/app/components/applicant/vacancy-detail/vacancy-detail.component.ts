import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VacancyService, operationResult, vacancy } from 'src/app/core';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent {
  
  vacancyId? : number;
  vacancy: vacancy;
  
  constructor(private vacancyService:VacancyService,private route: ActivatedRoute){}
  ngOnInit(): void {

    this.vacancyId  = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.getVacancyById(this.vacancyId);
  }

  getVacancyById(id : number) {
    this.vacancyService.getVacancyById(id).subscribe({
      next: (result: operationResult) => {
      this.vacancy = result.data;   
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
