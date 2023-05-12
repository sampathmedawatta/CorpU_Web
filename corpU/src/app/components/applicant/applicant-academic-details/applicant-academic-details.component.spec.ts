import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAcademicDetailsComponent } from './applicant-academic-details.component';

describe('ApplicantAcademicDetailsComponent', () => {
  let component: ApplicantAcademicDetailsComponent;
  let fixture: ComponentFixture<ApplicantAcademicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantAcademicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantAcademicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
