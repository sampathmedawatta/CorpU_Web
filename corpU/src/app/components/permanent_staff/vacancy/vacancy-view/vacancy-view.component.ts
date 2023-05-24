import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApplicationService, VacancyService, applicant, application, operationResult, vacancy } from 'src/app/core';

@Component({
  selector: 'app-vacancy-view',
  templateUrl: './vacancy-view.component.html',
  styleUrls: ['./vacancy-view.component.css']
})
export class VacancyViewComponent {

  vacancyId? : number;
  vacancy: vacancy;
  application : application = new application();
  applicantDetails: applicant = new applicant();

  constructor(private vacancyService:VacancyService,private route: ActivatedRoute, private applicationService:ApplicationService){}
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