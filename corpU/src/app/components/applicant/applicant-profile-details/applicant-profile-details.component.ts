import { Component } from '@angular/core';
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

  // Function to get appContactId, applicantId, phone, address_line1, address_line2, state, and postcode
  getContactDetails(): any {
    const details = {
      appContactId: this.applicantContact.appContactId,
      applicantId: this.applicantContact.applicantId,
      phone: this.applicantContact.phone,
      address_line1: this.applicantContact.address_line1,
      address_line2: this.applicantContact.address_line2,
      state: this.applicantContact.state,
      postcode: this.applicantContact.postcode
    };
    return details;
  }

  // Function to get applicant details
  getApplicantDetails(): number {
    return this.applicantDetails.applicantId;
  }

  onSubmit() {
    const data = {
      name: this.applicantDetails.name,
      appID: this.applicantDetails.applicantId,
      appContactId: this.applicantContact.appContactId,
      applicantId: this.applicantContact.applicantId,
      phone: this.applicantContact.phone,
      address_line1: this.applicantContact.address_line1,
      address_line2: this.applicantContact.address_line2,
      state: this.applicantContact.state,
      postcode: this.applicantContact.postcode
    };
    console.log(data);

}

}
