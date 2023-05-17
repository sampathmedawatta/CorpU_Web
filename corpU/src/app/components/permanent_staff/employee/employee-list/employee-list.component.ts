import { Component } from '@angular/core';
import { EmployeeService, employee } from 'src/app/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: employee[] = [];

  constructor(private employeeService : EmployeeService){
  
  }
    ngOnInit(): void {
      this.getUserList();
    }
  
  getUserList() {
    this.employeeService.geAllEmployeeList().subscribe({
      next: (result: any) => {
      this.employees = result.data;
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
  