import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService, VacancyService, classType, employee, operationResult, unit, vacancy, vacancyType } from 'src/app/core';

@Component({
  selector: 'app-vacancy-add',
  templateUrl: './vacancy-add.component.html',
  styleUrls: ['./vacancy-add.component.css']
})
export class VacancyAddComponent {

  vacancyForm: FormGroup;
  empSelected = 0;
  employee : employee = new employee();
  vacancyTypeSelected = 0;

  vacancyTypeList : vacancyType[] = [{
    vacancyTypeId: 1,
    vacancyName: 'Fultime',
    status: true,
  },
  {
    vacancyTypeId: 2,
    vacancyName: 'Parttime',
    status: true,
  }];


  classTypeList : classType[] = [{
    classTypeId: 1,
    classDescription: 'Online',
    status: true,
  },
  {
    classTypeId: 2,
    classDescription: 'Lab',
    status: true,
  },
  {
    classTypeId: 3,
    classDescription: 'Theory',
    status: true,
  },
  {
    classTypeId: 4,
    classDescription: 'Workshop',
    status: true,
  },
  {
    classTypeId: 5,
    classDescription: 'Tute',
    status: true,
  }
];

unitList : unit[] = [{
  unitId: 1,
  unitName: 'SQT',
  unitCode: 'SQ00001',
  status :true
},
{
  unitId: 1,
  unitName: 'TIP',
  unitCode: 'TIP00001',
  status :true
},
{
  unitId: 1,
  unitName: 'UCD',
  unitCode: 'UCP00001',
  status :true
}];


  vacancy: vacancy = new vacancy();
  submitted: boolean = false;
  isAdded: boolean = false;

  constructor(private vacancyService:VacancyService,  private router: Router, private builder: FormBuilder){
  }

  ngOnInit(): void {

    let _employee = localStorage.getItem('employee');
        if (_employee) {
          this.employee = JSON.parse(_employee);
    }
     this.buildForm();
    }
  
    buildForm() {
      this.vacancyForm = this.builder.group(
        {
          title: ['', [Validators.required, Validators.maxLength(250)]],
          description: ['', [Validators.required]],
          publishDate: ['', [Validators.required]],
          closingDate : ['', Validators.required],
          classTypeId : ['0', Validators.required],
          vacancyTypeId : ['0', Validators.required],
          unitId : ['0', Validators.required],
        }
      );
    }
    
  // convenience getter for easy access to form fields
  get f() { return this.vacancyForm.controls; }

  onSubmit() {

    if (this.vacancyForm.invalid) {
      return;
    }

    if(!this.submitted){

      this.submitted = true;
    this.vacancy = this.vacancyForm.value;
    this.vacancy.empId = this.employee.empId;
    this.vacancy.status = true;
    this.vacancy.publishDate = '2023-05-18T05:39:38.553Z';
    this.vacancy.closingDate = '2023-05-18T05:39:38.553Z';

    this.vacancyService.postVacancy(this.vacancy).subscribe({
      next: (result: operationResult) => {

        console.log(result.data);
        this.isAdded = true;
        this.vacancyForm.reset();

      },
      error: (error) => {
        this.submitted = false;
        if (error.status == 400) {
          console.error('Incorrect vacancy details');
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

