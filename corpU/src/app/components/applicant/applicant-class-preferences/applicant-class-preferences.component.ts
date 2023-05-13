import { Component } from '@angular/core';
import { applicantClassPreferance } from 'src/app/core/models/applicantClassPreferance';

@Component({
  selector: 'app-applicant-class-preferences',
  templateUrl: './applicant-class-preferences.component.html',
  styleUrls: ['./applicant-class-preferences.component.css']
})
export class ApplicantClassPreferencesComponent {

  applicantClassPrefrance: applicantClassPreferance = new applicantClassPreferance();
  
    // Function to get class preferanceID, applicantID, classTypeID, ClassPrefernace
    getContactDetails(): any {
      const details = {
        classPreferanceId: this.applicantClassPrefrance.classPreferanceId,
        applicantId: this.applicantClassPrefrance.applicantId,
        classTypeId: this.applicantClassPrefrance.classTypeId,
        classPreferance: this.applicantClassPrefrance.selectedclassPreferance
      };
      return details;
    }
  
    onSubmit() {
      const data = {
        classPreferanceId: this.applicantClassPrefrance.classPreferanceId,
        applicantId: this.applicantClassPrefrance.applicantId,
        classTypeId: this.applicantClassPrefrance.classTypeId,
        classPreferance: this.applicantClassPrefrance.selectedclassPreferance
      };
      console.log(data)
  }

}
