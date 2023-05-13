import { Component } from '@angular/core';
import { applicantQualification } from 'src/app/core';

@Component({
  selector: 'app-applicant-academic-details',
  templateUrl: './applicant-academic-details.component.html',
  styleUrls: ['./applicant-academic-details.component.css']
})
export class ApplicantAcademicDetailsComponent {
    applicantAcademic: applicantQualification = new applicantQualification();
    currentYear = new Date().getFullYear();
  
    // Function to get Institution Name, Qualification Type, and Year of Award
    getContactDetails(): any {
      const details = {
        qualification_type: this.applicantAcademic.qualificationType,
        institute: this.applicantAcademic.institute,
        awarded_year: this.applicantAcademic.awarded_year
      };
      return details;
    }
  
    onSubmit() {
      const data = {
        qualification_type: this.applicantAcademic.qualificationType,
        institute: this.applicantAcademic.institute,
        awarded_year: this.applicantAcademic.awarded_year
      };
      console.log(data)
  }
}
