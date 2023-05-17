import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService, employee, employeeRole, faculty, operationResult, user } from 'src/app/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
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

  empId : number = 0;
 
  constructor(private employeeService:EmployeeService,  private activatedRoute: ActivatedRoute, private router: Router, private builder: FormBuilder){
    this.empId  = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0');
  }

  ngOnInit(): void {
      this. getEmployeeById();
    }
  
    getEmployeeById(){
      this.employeeService.getEmployeeById(this.empId).subscribe({
        next: (result: operationResult) => {
        this.employeeDetails = result.data;
        this.buildForm();
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


    buildForm() {
      this.employeeForm = this.builder.group(
        {
          empName: [this.employeeDetails.empName, [Validators.required, Validators.maxLength(50)]],
          email: [this.employeeDetails.email, [Validators.required, Validators.email,  Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],
          phone: [this.employeeDetails.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
          empRoleId : [this.employeeDetails.empRoleId, Validators.required],
          facultyId : [this.employeeDetails.facultyId, Validators.required],
        }
      );
    }
    
  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  onSubmit() {

    if (this.employeeForm.invalid) {
      return;
    }

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

