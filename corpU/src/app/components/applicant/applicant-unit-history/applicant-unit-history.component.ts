import { Component } from '@angular/core';
import { ApplicationService, application, operationResult } from 'src/app/core';

@Component({
  selector: 'app-applicant-unit-history',
  templateUrl: './applicant-unit-history.component.html',
  styleUrls: ['./applicant-unit-history.component.css']
})
export class ApplicantUnitHistoryComponent {

  applicationList : application[] = []; 

  constructor(private applicationService: ApplicationService){
  
  }
  
  ngOnInit(): void {
    this.getApplicationList();
  }
  
  getApplicationList() {
    this.applicationService.geAllApplicationList().subscribe({
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