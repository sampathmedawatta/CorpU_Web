import { Component } from '@angular/core';
import { applicant, ApplicantContactDetailService, applicantQualification, ApplicantQualificationService, ApplicantService, operationResult, user } from 'src/app/core';

@Component({
  selector: 'app-applicant-academic-details',
  templateUrl: './applicant-academic-details.component.html',
  styleUrls: ['./applicant-academic-details.component.css']
})
export class ApplicantAcademicDetailsComponent{
  applicantAcademic: applicantQualification = new applicantQualification();
  currentYear = new Date().getFullYear();
applicantQualificationList: any;
applicantDetails: applicant = new applicant();

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
        this.applicantService.getApplicantByUserId(this.user.userId).subscribe({
          next: (result: operationResult) => {
            if (result.data) {

              this.applicantDetails = result.data;
              console.log(this.applicantDetails);

        this.applicantQualificationService.getApplicantQualificationByApplicantId(this.applicantDetails.applicantId).subscribe({
          next: (result: operationResult) => {
            if (result.data) {
              this.applicantQualificationList = result.data;
            }
          },
        });

            }
          },
          error: (error) => {
            console.error('There was an error fetching applicant details!', error);
          }
        });
      }
    }

    
    }  

  onSubmit() {
    this.applicantAcademic.applicantId = 3; // Replace with the actual applicant ID
    this.applicantAcademic.description = '';
    this.applicantAcademic.qualificationTypeId = 1;
    this.applicantAcademic.awarded_year= '2023-05-18T05:35:26.316Z';
    
    this.applicantQualificationService.postApplicantQualification(this.applicantAcademic).subscribe({
      next: (result: operationResult) => {
        if (result.data) {
          console.log('Applicant academic details saved successfully!');
        } else {
          console.error('There was an error saving applicant academic details:', result.message);
        }
      },
      error: (error) => {
        console.error('There was an error saving applicant academic details:', error);
      }
    });
  }
}




