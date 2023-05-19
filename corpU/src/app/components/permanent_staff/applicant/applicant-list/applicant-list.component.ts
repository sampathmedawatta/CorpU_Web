import { Component } from '@angular/core';
import { ApplicantService, applicant, operationResult } from 'src/app/core';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent {
  applicants: applicant[] = [];

  constructor(private applicantService : ApplicantService){
  
  }
    ngOnInit(): void {
      this.getUserList();
    }
  
  getUserList() {
    this.applicantService.geAllApplicantList().subscribe({
      next: (result: operationResult) => {
      this.applicants = result.data;
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
  
