import { Component } from '@angular/core';
import { applicant, ApplicantContactDetailService, applicantQualification, ApplicantQualificationService, ApplicantService, operationResult, qualificationType, user } from 'src/app/core';

@Component({
  selector: 'app-applicant-academic-details',
  templateUrl: './applicant-academic-details.component.html',
  styleUrls: ['./applicant-academic-details.component.css']
})
export class ApplicantAcademicDetailsComponent{
  applicantAcademic: applicantQualification = new applicantQualification();
  currentYear = new Date().getFullYear();

applicantQualificationList: applicantQualification[] =[];
applicantDetails: applicant = new applicant();
isSaved : boolean = false;

qualificationTypeList : qualificationType [] = [{
  qualificationTypeId : 1,
  description : 'BSc',
    status : true,
},
{
  qualificationTypeId : 2,
  description : 'MSc',
    status : true,
},
{
  qualificationTypeId : 3,
  description : 'Phd',
    status : true,
}];


user : user;
  constructor(private applicantQualificationService: ApplicantQualificationService,
    private applicantService: ApplicantService){

  }

  ngOnInit(): void {

    let _user = localStorage.getItem('user');
    console.log(_user);
    if (_user) {
      this.user = JSON.parse(_user);
      if(this.user.userId){

        let _applicant = localStorage.getItem('applicant');
            if (_applicant) {
              this.applicantDetails = JSON.parse(_applicant);
          this.getQualificationList();

        }
      }
    }
    
    }  

    getQualificationList(){
      this.applicantQualificationService.geAllApplicantQualificationList(this.applicantDetails.applicantId).subscribe({
        next: (result: operationResult) => {
          if (result.data) {
            this.applicantQualificationList = result.data;
          }
        },
      });
    }

  onSubmit() {
    this.applicantAcademic.applicantId = this.applicantDetails.applicantId; 
    this.applicantAcademic.qualificationTypeId = 1;
    
    this.applicantQualificationService.postApplicantQualification(this.applicantAcademic).subscribe({
      next: (result: operationResult) => {
        if (result.data) {
          this.getQualificationList();
          this.isSaved = true;
        } 
      },
      error: (error) => {
        console.error('There was an error saving applicant academic details:', error);
      }
    });
  }
}




