import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService, employee, employeeRole, faculty } from 'src/app/core';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  
 
  empSelected = 0;
  employeeRoleList : employeeRole[] = [
    {
      empRoleId: 1,
      roleName: "Admin",
      status: true
    },{
      empRoleId: 2,
      roleName: "Manager",
      status: true
    },{
      empRoleId: 3,
      roleName: "Staff",
      status: true
    }
  ];
  facultySelected = 0;
  facultyList : faculty[] = [{
    facultyId: 1,
    facultyName: "Information Technology",
    status: true
  },{
    facultyId: 2,
    facultyName: "Human Resource",
    status: true
  },{
    facultyId: 3,
    facultyName: "Bussiness Account",
    status: true
  }];

  employeeDetails: employee = new employee();
  
  constructor(private employeeService:EmployeeService){

  }
    ngOnInit(): void {
      this.employeeRoleList;
    }
    

  onSubmit() {

    console.log(this.employeeDetails);
  }
}
