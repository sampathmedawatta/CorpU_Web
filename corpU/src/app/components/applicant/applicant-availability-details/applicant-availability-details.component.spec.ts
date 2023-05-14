import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAvailabilityDetailsComponent } from './applicant-availability-details.component';

describe('ApplicantAvailabilityDetailsComponent', () => {
  let component: ApplicantAvailabilityDetailsComponent;
  let fixture: ComponentFixture<ApplicantAvailabilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantAvailabilityDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantAvailabilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
