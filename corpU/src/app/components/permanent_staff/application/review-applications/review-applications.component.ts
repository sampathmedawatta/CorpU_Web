
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApplicantQualificationService, ApplicationService, ClassTypeService, VacancyTypeService, applicantQualification, application, classType, employee, operationResult, shortlist, unit, vacancyType } from 'src/app/core';
import { ShortListService } from 'src/app/core/services/short-list.service';

@Component({
  selector: 'app-review-applications',
  templateUrl: './review-applications.component.html',
  styleUrls: ['./review-applications.component.css']
})
export class ReviewApplicationsComponent {

  applicationId : number = 0;
  unitId: number = 0;
  applicantId: number = 0;
  employee : employee = new employee();
  application: application = new application();
  classType: classType = new classType();
  unit: unit = new unit();
  vacancyType : vacancyType = new vacancyType();
  applicantQualificationList: applicantQualification[] =[];
  dataLoaded : Promise<boolean>;

  shortListOptions : string[] = ["accept","reject"];

  shortlist : shortlist = new shortlist();
  isFormValid : boolean = true;
  
  constructor(private route: ActivatedRoute, 
    private applicationService : ApplicationService,
    private applicantQualificationService: ApplicantQualificationService,
    private classTypeService: ClassTypeService,
    private vacancyTypeService: VacancyTypeService,
    private shortListService: ShortListService
    ){}

  ngOnInit(): void {
    this.applicationId  = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    let _employee = localStorage.getItem('employee');
        if (_employee) {
          this.employee = JSON.parse(_employee);
    }

    this.getApplicationData();
   
  }

  getApplicationData(){
    this.applicationService.getApplicationByApplicationId(this.applicationId).subscribe({
      next: (result: operationResult) => {
      this.application = result.data;
      this.getQualificationData();
      this.getClassType();
      this.getVacancyType();

      this.dataLoaded = Promise.resolve(true);
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

  getQualificationData(){
    this.applicantQualificationService.geAllApplicantQualificationList(this.application.applicantId).subscribe({
      next: (result: operationResult) => {
      this.applicantQualificationList = result.data;
      console.log(this.applicantQualificationList);
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

  save(shortListForm : NgForm){
    if(shortListForm.invalid){
      this.isFormValid = false;
     
    }
    else{
      this.isFormValid = true;
      console.log(shortListForm.value);

      this.shortlist.applicationId = this.application.applicantId;
      this.shortlist.empId = this.employee.empId;
      this.shortlist.comments = shortListForm.value.comments;

      if(shortListForm.value.acceptRejectRadio == 'accept'){
        this.shortlist.status = 'Shortlisted';
      }
      else{
        this.shortlist.status = 'Rejected';
      }
      
      this.shortListService.postShortList(this.shortlist).subscribe({
        next: (result: operationResult) => {

          console.log(result.data);
  
        },
        error: (error) => {
          if (error.status == 400) {
            console.error('Incorrect shortlist details');
          } else {
            console.error('There was an error!', error);
          }
        }

      });
    }
  }
}
