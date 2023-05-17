import { Component } from '@angular/core';
import { ApplicantContactDetailService, ApplicantService, operationResult } from 'src/app/core';
import { applicant } from 'src/app/core/models/applicant';
import { applicantContactDetail } from 'src/app/core/models/applicantContactDetail';

@Component({
  selector: 'app-applicant-profile-details',
  templateUrl: './applicant-profile-details.component.html',
  styleUrls: ['./applicant-profile-details.component.css']
})
export class ApplicantProfileDetailsComponent {
  applicantContact: applicantContactDetail = new applicantContactDetail();
  applicantDetails: applicant = new applicant();

  constructor(private applicantContactDetailService: ApplicantContactDetailService,
    private applicantService: ApplicantService){

  }

  ngOnInit(): void {
    this.applicantContactDetailService.getApplicantContactDetailByApplicantId(3).subscribe({
      next: (result: operationResult) => {
       
        this.applicantContact = result.data;
       console.log('applicant - '+ this.applicantContact)

      },
    });
   
  }
  onSubmit() {
   
    this.applicantContact.applicant_id = 3;
    this.applicantContactDetailService.postApplicantContactDetail(this.applicantContact).subscribe({
      next: (result: operationResult) => {
       

      },
      error: (error) => {
       
        if (error.status == 400) {
          console.error('Incorrect contact details');
        } else {
          console.error('There was an error!', error);
        }
      }
    });

}

}
