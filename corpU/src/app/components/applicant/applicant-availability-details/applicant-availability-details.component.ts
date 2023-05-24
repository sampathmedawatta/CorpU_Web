
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicantAvailabilityService, applicant, operationResult } from 'src/app/core';
import { applicantAvailability } from 'src/app/core/models/applicantAvailability';

@Component({
  selector: 'app-applicant-availability-details',
  templateUrl: './applicant-availability-details.component.html',
  styleUrls: ['./applicant-availability-details.component.css']
})
export class ApplicantAvailabilityDetailsComponent {
  applicantAvailability: applicantAvailability = new applicantAvailability();
  applicantDetails: applicant = new applicant();
  availabilityForm: FormGroup;
  options = ['All Day','Morning','Afternoon','Evening'];
  dataLoaded : boolean = false;

  constructor(private builder: FormBuilder, private applicantAvailabilityService: ApplicantAvailabilityService){
    
    this.loadAvailability();
  }


  loadAvailability(){
    let _applicant = localStorage.getItem('applicant');
        if (_applicant) {
          this.applicantDetails = JSON.parse(_applicant);
        this.applicantAvailabilityService.getApplicantAvailabilityByApplicantId(this.applicantDetails.applicantId).subscribe({
          next: (result: operationResult) => {
            if (result.data) {
              this.dataLoaded = true;
              this.applicantAvailability = result.data;
              this.buildForm();
            }
          },
        });
      }
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {

     if(this.dataLoaded){
      this.availabilityForm = this.builder.group(
        {
          monday: [this.applicantAvailability.monday, [Validators.required]],
          tuesday: [this.applicantAvailability.tuesday, [Validators.required]],
          wednesday: [this.applicantAvailability.wednesday, [Validators.required]],
          thursday: [this.applicantAvailability.thursday, [Validators.required]],
          friday: [this.applicantAvailability.friday, [Validators.required]],
        }
      );
     }
     else{
      this.availabilityForm = this.builder.group(
        {
           monday: ['0', [Validators.required]],
           tuesday: ['0', [Validators.required]],
           wednesday: ['0', [Validators.required]],
           thursday: ['0', [Validators.required]],
           friday: ['0', [Validators.required]],
        }
      );
     }
  }

  get f() { return this.availabilityForm.controls; }

  onSubmit() {
    if (this.availabilityForm.invalid) {
      return;
    }

    if(this.applicantAvailability.appAvailabilityId){
      this.applicantAvailability.appAvailabilityId = this.applicantAvailability.appAvailabilityId;
      this.update();
    }else{
      this.save();
    }
      
  }

  update(){

    this.applicantAvailability.applicantId = this.applicantDetails.applicantId;
    this.applicantAvailability.monday = this.availabilityForm.value.monday;
    this.applicantAvailability.tuesday = this.availabilityForm.value.tuesday;
    this.applicantAvailability.wednesday = this.availabilityForm.value.wednesday;
    this.applicantAvailability.thursday = this.availabilityForm.value.thursday;
    this.applicantAvailability.friday = this.availabilityForm.value.friday;

    this.applicantAvailabilityService.updateApplicantAvailability(this.applicantAvailability).subscribe({
      next: (result: operationResult) => {
        let app = result.data;
    },
    error: (error) => {
      if (error.status == 400) {
        console.error('Incorrect contact details');
      } else {
        console.error('There was an error!', error);
      }
    }
  });
  }


  save(){
    console.log(this.applicantAvailability);

    this.applicantAvailability.applicantId = this.applicantDetails.applicantId;
    this.applicantAvailability.monday = this.availabilityForm.value.monday;
    this.applicantAvailability.tuesday = this.availabilityForm.value.tuesday;
    this.applicantAvailability.wednesday = this.availabilityForm.value.wednesday;
    this.applicantAvailability.thursday = this.availabilityForm.value.thursday;
    this.applicantAvailability.friday = this.availabilityForm.value.friday;

    this.applicantAvailabilityService.postApplicantAvailability(this.applicantAvailability).subscribe({
      next: (result: operationResult) => {
        let appli = result.data;
    },
    error: (error) => {
      if (error.status == 400) {
        console.error('Incorrect contact details');
      } else {
        console.error('There was an error!', error);
      }
    }
  });
  }
  
  
}