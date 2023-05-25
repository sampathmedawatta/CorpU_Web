import { Component } from '@angular/core';
import { ApplicationService, applicant, application, operationResult } from 'src/app/core';

@Component({
  selector: 'app-applicant-unit-history',
  templateUrl: './applicant-unit-history.component.html',
  styleUrls: ['./applicant-unit-history.component.css']
})
export class ApplicantUnitHistoryComponent {

  applicationList : application[] = []; 
  applicantDetails: applicant = new applicant();
  constructor(private applicationService: ApplicationService){
  
  }
  
  ngOnInit(): void {
    let _applicant = localStorage.getItem('applicant');
        if (_applicant) {
          this.applicantDetails = JSON.parse(_applicant);
    console.log(this.applicantDetails);
    this.getApplicationList();
    }
    
  }
  
  getApplicationList() {
    this.applicationService.getApplicationByApplicantId(this.applicantDetails.applicantId).subscribe({
      next: (result: operationResult) => {
      this.applicationList = result.data;
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