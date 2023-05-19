import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantQualificationService, ApplicationService, ClassTypeService, UnitService, VacancyTypeService, applicantQualification, application, classType, operationResult, unit, vacancyType } from 'src/app/core';

@Component({
  selector: 'app-review-applications',
  templateUrl: './review-applications.component.html',
  styleUrls: ['./review-applications.component.css']
})
export class ReviewApplicationsComponent {

  applicationId : number = 0;
  unitId: number = 0;
  applicantId: number = 0;

  application: application;
  classType: classType;
  unit: unit;
  vacancyType : vacancyType;
  applicantQualification: applicantQualification;
  
  constructor(private route: ActivatedRoute, 
    private applicationService : ApplicationService,
    private applicantQualificationService: ApplicantQualificationService,
    private classTypeService: ClassTypeService,
    private unitService: UnitService,
    private vacancyTypeService: VacancyTypeService
    ){}

  ngOnInit(): void {
    this.applicationId  = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.getApplicationData();
   
  }

  getApplicationData(){
    this.applicationService.getApplicationByApplicationId(this.applicationId).subscribe({
      next: (result: operationResult) => {
      this.application = result.data;
      this.getReferanceData();
      console.log(this.application);
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

  getReferanceData(){
    this.applicantQualificationService.getApplicantQualificationByApplicantId(this.application.applicantId).subscribe({
      next: (result: operationResult) => {
      this.applicantQualification = result.data;
      console.log(this.applicantQualification);
      this.getClassType();
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

  getClassType(){
    this.classTypeService.getClassTypeById(this.application.vacancy.classTypeId).subscribe({
      next: (result: operationResult) => {
      this.classType = result.data;
      this.getVacancyType();
      console.log(this.classType);
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

  getVacancyType(){
    this.vacancyTypeService.getVacancyTypeById(this.application.vacancy.vacancyTypeId).subscribe({
      next: (result: operationResult) => {
      this.vacancyType = result.data;
      console.log(this.vacancyType);
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
