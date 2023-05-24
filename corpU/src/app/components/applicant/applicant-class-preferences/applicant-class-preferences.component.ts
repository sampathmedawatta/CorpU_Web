import { Component } from '@angular/core';
import { applicant } from 'src/app/core';
import { applicantClassPreferance } from 'src/app/core/models/applicantClassPreferance';

@Component({
  selector: 'app-applicant-class-preferences',
  templateUrl: './applicant-class-preferences.component.html',
  styleUrls: ['./applicant-class-preferences.component.css']
})
export class ApplicantClassPreferencesComponent {

  applicantDetails: applicant = new applicant();
  isSaved : boolean = false;
  classPreferences = [
    { id: 'morning', name: 'Morning', value: 'Morning', label: 'Morning', selected: false },
    { id: 'afternoon', name: 'Afternoon', value: 'Afternoon', label: 'Afternoon', selected: false },
    { id: 'evening', name: 'Evening', value: 'Evening', label: 'Evening', selected: false },
    { id: 'introductory', name: 'Introductory', value: 'Introductory', label: 'Introductory', selected: false },
    { id: 'advanced', name: 'Advanced', value: 'Advanced', label: 'Advanced', selected: false }
  ];

  ngOnInit() {
    console.log(this.classPreferences);
  }

  applicantClassPrefrance: applicantClassPreferance = new applicantClassPreferance();
  

    onSubmit() {
      let _applicant = localStorage.getItem('applicant');
      if (_applicant) {
        this.applicantDetails = JSON.parse(_applicant);
        this.applicantClassPrefrance.applicantId = this.applicantDetails.applicantId;
        this.applicantClassPrefrance.classPreferanceId = 0;
        this.applicantClassPrefrance.classTypeId = 20;
        
        this.isSaved = true;
        // Update the selected class preference status to true
       
    
        console.log(this.classPreferences);
      }
    }    
}

