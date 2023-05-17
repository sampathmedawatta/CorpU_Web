import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService, employee, employeeRole, faculty, operationResult, user } from 'src/app/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  
  employeeForm: FormGroup;
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
  userDetails : user;
  employeeDetails: employee = new employee();
  submitted: boolean = false;
  isUserRegistered: boolean = false;

  constructor(private employeeService:EmployeeService,  
    private router: Router, 
    private builder: FormBuilder,
    private spinner: NgxSpinnerService){
    
  }

  ngOnInit(): void {
        this.buildForm();
    }
  
    buildForm() {
      this.employeeForm = this.builder.group(
        {
          empName: ['', [Validators.required, Validators.maxLength(50)]],
          email: ['', [Validators.required, Validators.email,  Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],
          phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
          empRoleId : ['0', Validators.required],
          facultyId : ['0', Validators.required],
        }
      );
    }
    
  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  onSubmit() {

    if (this.employeeForm.invalid) {
      return;
    }

     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 7000);

     
    if(!this.submitted){
      this.submitted = true;
    this.employeeDetails = this.employeeForm.value;

    this.employeeService.postEmployee(this.employeeDetails).subscribe({
      next: (result: operationResult) => {

        console.log(result.data);
        this.isUserRegistered = true;
        this.employeeForm.reset();

      },
      error: (error) => {
        this.submitted = false;
        if (error.status == 400) {
          console.error('Incorrect employee details');
        } else {
          console.error('There was an error!', error);
        }
      },
    });
  }
  }

  handlerCloseAllert() {
    this.router.navigateByUrl('/Employees');
  }
}
