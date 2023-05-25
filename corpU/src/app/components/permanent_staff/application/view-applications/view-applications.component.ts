import { Component } from '@angular/core';
import { ApplicationService, application, operationResult } from 'src/app/core';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent {
  applications: application[] = [];
  role : string;
  constructor(private applicationService : ApplicationService){
  
  }
  ngOnInit(): void {
    let userRole = localStorage.getItem('userRole');
    if (userRole) {
    this.role = userRole;
    }
    this.getApplicationList();
  }

  getApplicationList() {
    this.applicationService.geAllApplicationList().subscribe({
      next: (result: operationResult) => {
      this.applications = result.data;
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
