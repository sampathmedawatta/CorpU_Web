import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VacancyService, operationResult, vacancy } from 'src/app/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  vacancyId? : number;
  vacancy: vacancy;
  
  constructor(private vacancyService:VacancyService,private route: ActivatedRoute){}
  ngOnInit(): void {

    this.vacancyId  = parseInt(this.route.snapshot.paramMap.get('id') || '0');

    console.log( this.vacancyId);
    this.getVacancyById(this.vacancyId);
  }

  getVacancyById(id : number) {
    console.log( id);
    this.vacancyService.getVacancyById(id).subscribe({
      
      next: (result: operationResult) => {
      this.vacancy = result.data;   
      console.log( this.vacancy);
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

