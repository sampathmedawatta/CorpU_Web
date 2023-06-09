import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApplicationService, VacancyService, applicant, application, operationResult, vacancy } from 'src/app/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  vacancyId? : number;
  vacancy: vacancy;
  application : application = new application();
  applicantDetails: applicant = new applicant();
  agreeCheckbox : boolean = false;
  isErrored : boolean = false;
  isSaved: boolean = false;
  constructor(private vacancyService:VacancyService,private route: ActivatedRoute,private router: Router, private applicationService:ApplicationService){}
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
    
    saveApplication(){
     
      if(this.agreeCheckbox){
        this.isErrored = false;
      
      let _applicant = localStorage.getItem('applicant');
          if (_applicant) {
            this.applicantDetails = JSON.parse(_applicant);

            this.application.applicantId = this.applicantDetails.applicantId;
            this.application.resumeUrl = '';
            this.application.vacancyId =this.vacancyId ? this.vacancyId : 0;
            this.application.status = 'Pending';
      }

     
      if(this.application){
        this.applicationService.postApplication(this.application).subscribe({

          next: (result: operationResult) => {
            this.application = result.data;   
            this.isSaved = true;
            
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
    else{
      this.isErrored = true;
    }
     
    }

    handlerCloseAllert() {
      this.router.navigate(['/Application/History']);
      this.isErrored = false;
    }
    
}

