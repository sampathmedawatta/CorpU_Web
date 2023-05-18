import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantContactDetailService, ApplicantService, operationResult, user } from 'src/app/core';
import { applicant } from 'src/app/core/models/applicant';
import { applicantContactDetail } from 'src/app/core/models/applicantContactDetail';

@Component({
  selector: 'app-applicant-profile-details',
  templateUrl: './applicant-profile-details.component.html',
  styleUrls: ['./applicant-profile-details.component.css']
})
export class ApplicantProfileDetailsComponent implements OnInit {
  applicantContact: applicantContactDetail = new applicantContactDetail();
  applicantDetails: applicant = new applicant();
  hasFilledForm: boolean = false;
  user : user;
  isSaved : boolean = false;

  constructor(private applicantContactDetailService: ApplicantContactDetailService,
    private applicantService: ApplicantService, private router: Router){

  }

  ngOnInit(): void {

    let _user = localStorage.getItem('user');
    if (_user) {
      this.user = JSON.parse(_user);
      if(this.user.userId){
        this.applicantService.getApplicantByUserId(this.user.userId).subscribe({
          next: (result: operationResult) => {
            if (result.data) {

              this.applicantDetails = result.data;
              this.hasFilledForm = true;
            this.applicantContactDetailService.getApplicantContactDetailByApplicantId(this.applicantDetails.applicantId).subscribe({
              next: (result: operationResult) => {
                if (result.data) {
                  this.applicantContact = result.data;
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
    this.applicantContact.applicant_id = this.applicantDetails.applicantId;
    if(this.applicantContact.appContactId > 0){
      this.updateContactDetails();
      this.isSaved = true;
    }
    else{
      this.saveContactDetails();
      this.isSaved = true;
    }
  }
  
  updateContactDetails(){
    this.applicantContactDetailService.updateApplicantContactDetail(this.applicantContact).subscribe({
      next: (result: operationResult) => {
        // Handle success
        this.applicantContactDetailService.getApplicantContactDetailByApplicantId(this.applicantContact.applicant_id).subscribe({
          next: (result: operationResult) => {
            if (result.data) {
              this.applicantContact = result.data;
              this.hasFilledForm = true;
            }
          },
          error: (error) => {
            console.error('There was an error fetching applicant contact details!', error);
          }
        });
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

  saveContactDetails(){

    this.applicantContactDetailService.postApplicantContactDetail(this.applicantContact).subscribe({
      next: (result: operationResult) => {
        // Handle success
        this.applicantContactDetailService.getApplicantContactDetailByApplicantId(3).subscribe({
          next: (result: operationResult) => {
            if (result.data) {
              this.applicantContact = result.data;
              this.hasFilledForm = true;
            }
          },
          error: (error) => {
            console.error('There was an error fetching applicant contact details!', error);
          }
        });
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
