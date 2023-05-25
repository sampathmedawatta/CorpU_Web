import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantAvailabilityService, ApplicantContactDetailService, ApplicantQualificationService, ApplicantService, applicant, applicantAvailability, applicantContactDetail, applicantQualification, operationResult } from 'src/app/core';

@Component({
  selector: 'app-applicant-view',
  templateUrl: './applicant-view.component.html',
  styleUrls: ['./applicant-view.component.css']
})
export class ApplicantViewComponent {
  applicantAvailability: applicantAvailability = new applicantAvailability();
  applicantContactDetails: applicantContactDetail = new applicantContactDetail();
  applicantQualificationList: applicantQualification[] =[];
  applicantId : number = 0;
  applicantDetails : applicant = new applicant();

  constructor(private applicantQualificationService: ApplicantQualificationService,
    private applicantService: ApplicantService,
    private applicantContactDetailService: ApplicantContactDetailService,
    private applicantAvailabilityService: ApplicantAvailabilityService,
    private route: ActivatedRoute){
      
  }
  
  ngOnInit(): void {
    this.applicantId  = parseInt(this.route.snapshot.paramMap.get('applicantId') || '1');
      this.getApplicant();
}

getApplicant(){
  this.applicantService.getApplicant(this.applicantId).subscribe({
    next: (result: operationResult) => {
      if (result.data) {
        this.applicantDetails = result.data;

        this.getContactDetails();
        this.getQualificationList();
        this.getAvailability();
      
    }
    },
    error: (error) => {
      console.error('There was an error fetching applicant details!', error);
    }
  });
}

getAvailability(){
  this.applicantAvailabilityService.getApplicantAvailabilityByApplicantId(this.applicantDetails.applicantId).subscribe({
    next: (result: operationResult) => {
      if (result.data) {
        this.applicantAvailability = result.data;
      }
    },
  });
}

getContactDetails(){
  this.applicantContactDetailService.getApplicantContactDetailByApplicantId(this.applicantDetails.applicantId).subscribe({
    next: (result: operationResult) => {
      if (result.data) {
        this.applicantContactDetails = result.data;
      }
    },
  });
}
getQualificationList(){
  this.applicantQualificationService.geAllApplicantQualificationList(this.applicantId).subscribe({
    next: (result: operationResult) => {
      if (result.data) {
        this.applicantQualificationList = result.data;
      }
    },
  });
}
}
