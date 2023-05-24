import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApplicantAvailabilityService, ApplicantContactDetailService, ApplicantService, applicant, applicantAvailability, applicantContactDetail, employee, operationResult, shortlist } from 'src/app/core';
import { ShortListService } from 'src/app/core/services/short-list.service';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent {
  applicantAvailability: applicantAvailability = new applicantAvailability();
  applicantContactDetails: applicantContactDetail = new applicantContactDetail();
  availabilityForm: FormGroup;
  options : string[] = [];
  applicantDetails: applicant = new applicant();
  dataLoaded : boolean = false;
  applicationId: number = 0;
  applicantId: number = 0;
  employee : employee = new employee();
  shortlist : shortlist = new shortlist();
  isScheduled : boolean = false;
  isSaved: boolean = false;

  constructor(private route: ActivatedRoute,
    private builder: FormBuilder, 
    private applicantAvailabilityService: ApplicantAvailabilityService,
    private applicantService: ApplicantService,
    private applicantContactDetailService: ApplicantContactDetailService,
    private shortListService: ShortListService){
    
    this.loadAvailability();
  }

  loadAvailability(){

    this.applicationId  = parseInt(this.route.snapshot.paramMap.get('applicationId') || '0');
    this.applicantId  = parseInt(this.route.snapshot.paramMap.get('applicantId') || '0');

    let _employee = localStorage.getItem('employee');
    if (_employee) {
    this.employee = JSON.parse(_employee);

    }

        this.applicantAvailabilityService.getApplicantAvailabilityByApplicantId(this.applicantId).subscribe({
          next: (result: operationResult) => {
            if (result.data) {
              this.dataLoaded = true;
              this.applicantAvailability = result.data;

              this.options = new Array(
              'Monday - '+ this.applicantAvailability.monday, 
              'Tuesday - '+ this.applicantAvailability.tuesday,
              'Wednesday - '+ this.applicantAvailability.wednesday,
              'Thursday - '+ this.applicantAvailability.thursday,
              'Friday - '+ this.applicantAvailability.friday);
              
              this.getApplicant();
              this.getShortList();
              this.buildForm();
            }
          },
        });
  }

  getShortList(){
    this.shortListService.getShortListByApplicationId(this.applicationId).subscribe({
      next: (result: operationResult) => {
       
        console.log(result.data);
        if(result.data){
          this.shortlist = result.data;
          if(this.shortlist.shortlistId > 0){
            if(this.shortlist.status =='Scheduled'){
              this.isScheduled = true;
            }
            
          }
        }

      },
      error: (error) => {
        if (error.status == 400) {
          console.error('Incorrect shortlist details');
        } else {
          console.error('There was an error!', error);
        }
      }

    });

  }
  getApplicant(){
    this.applicantService.getApplicant(this.applicantId).subscribe({
      next: (result: operationResult) => {
        if (result.data) {
          this.applicantDetails = result.data;
          this.getContactDetails();
      }
      },
      error: (error) => {
        console.error('There was an error fetching applicant details!', error);
      }
    });
  }

  getContactDetails(){
    this.applicantContactDetailService.getApplicantContactDetailByApplicantId(this.applicantDetails.applicantId).subscribe({
      next: (result: operationResult) => {
        if (result.data) {
          this.applicantContactDetails = result.data;
        }
      },
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
      this.availabilityForm = this.builder.group(
        {
          
          timeslot: ['0', [Validators.required]],
          location: ['', [Validators.required, Validators.maxLength(50)]],
          interviewDate: ['', [Validators.required, Validators.maxLength(50)]],
          interviewTime: ['', [Validators.required, Validators.maxLength(50)]],
          comment: ['', [Validators.required, Validators.maxLength(50)]],
        }
      );
  }

  get f() { return this.availabilityForm.controls; }

  onSubmit() {
    if (this.availabilityForm.invalid) {
      return;
    }

    this.shortlist.applicationId = this.applicationId;
    this.shortlist.empId = this.employee.empId;
    this.shortlist.location = this.availabilityForm.value.location;
    this.shortlist.interviewDate = this.availabilityForm.value.interviewDate;
    this.shortlist.interviewTime = this.availabilityForm.value.interviewTime;
    this.shortlist.timeslot = this.availabilityForm.value.timeslot;
    this.shortlist.status = "Scheduled";
    this.shortlist.comments = this.availabilityForm.value.comment;

    this.shortListService.updateShortList(this.shortlist).subscribe({
      next: (result: operationResult) => {
        this.isSaved = true;
        this.isScheduled = true;
      },
      error: (error) => {
        if (error.status == 400) {
          console.error('Incorrect shortlist details');
        } else {
          console.error('There was an error!', error);
        }
      }

    });
  }
}
