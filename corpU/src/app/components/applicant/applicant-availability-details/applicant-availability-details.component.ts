import { Component } from '@angular/core';
import { applicantAvailability } from 'src/app/core/models/applicantAvailability';

@Component({
  selector: 'app-applicant-availability-details',
  templateUrl: './applicant-availability-details.component.html',
  styleUrls: ['./applicant-availability-details.component.css']
})
export class ApplicantAvailabilityDetailsComponent {
  applicantAvailability: applicantAvailability = new applicantAvailability();

  getAvailabilityDetails(): any {
    const details = {
      appAvailabilityId: this.applicantAvailability.appAvailabilityId,
      applicantId: this.applicantAvailability.applicantId,
      availability: {
        monday: {
          allDay: this.applicantAvailability.availability.monday.allDay,
          morning: this.applicantAvailability.availability.monday.morning,
          afternoon: this.applicantAvailability.availability.monday.afternoon,
          evening: this.applicantAvailability.availability.monday.evening
        },
        tuesday: {
          allDay: this.applicantAvailability.availability.tuesday.allDay,
          morning: this.applicantAvailability.availability.tuesday.morning,
          afternoon: this.applicantAvailability.availability.tuesday.afternoon,
          evening: this.applicantAvailability.availability.tuesday.evening
        },
        wednesday: {
          allDay: this.applicantAvailability.availability.wednesday.allDay,
          morning: this.applicantAvailability.availability.wednesday.morning,
          afternoon: this.applicantAvailability.availability.wednesday.afternoon,
          evening: this.applicantAvailability.availability.wednesday.evening
        },
        thursday: {
          allDay: this.applicantAvailability.availability.thursday.allDay,
          morning: this.applicantAvailability.availability.thursday.morning,
          afternoon: this.applicantAvailability.availability.thursday.afternoon,
          evening: this.applicantAvailability.availability.thursday.evening
        },
        friday: {
          allDay: this.applicantAvailability.availability.friday.allDay,
          morning: this.applicantAvailability.availability.friday.morning,
          afternoon: this.applicantAvailability.availability.friday.afternoon,
          evening: this.applicantAvailability.availability.friday.evening
        }
      }
    };
    return details;    
  }
  
  onSubmit() {
    const details = {
      appAvailabilityId: this.applicantAvailability.appAvailabilityId,
      applicantId: this.applicantAvailability.applicantId,
      availability: {
        monday: {
          allDay: this.applicantAvailability.availability.monday.allDay,
          morning: this.applicantAvailability.availability.monday.morning,
          afternoon: this.applicantAvailability.availability.monday.afternoon,
          evening: this.applicantAvailability.availability.monday.evening
        },
        tuesday: {
          allDay: this.applicantAvailability.availability.tuesday.allDay,
          morning: this.applicantAvailability.availability.tuesday.morning,
          afternoon: this.applicantAvailability.availability.tuesday.afternoon,
          evening: this.applicantAvailability.availability.tuesday.evening
        },
        wednesday: {
          allDay: this.applicantAvailability.availability.wednesday.allDay,
          morning: this.applicantAvailability.availability.wednesday.morning,
          afternoon: this.applicantAvailability.availability.wednesday.afternoon,
          evening: this.applicantAvailability.availability.wednesday.evening
        },
        thursday: {
          allDay: this.applicantAvailability.availability.thursday.allDay,
          morning: this.applicantAvailability.availability.thursday.morning,
          afternoon: this.applicantAvailability.availability.thursday.afternoon,
          evening: this.applicantAvailability.availability.thursday.evening
        },
        friday: {
          allDay: this.applicantAvailability.availability.friday.allDay,
          morning: this.applicantAvailability.availability.friday.morning,
          afternoon: this.applicantAvailability.availability.friday.afternoon,
          evening: this.applicantAvailability.availability.friday.evening
        }
      }
    };
    console.log(details);
  }
  
  
}
