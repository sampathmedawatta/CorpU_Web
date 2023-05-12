import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantClassPreferencesComponent } from './applicant-class-preferences.component';

describe('ApplicantClassPreferencesComponent', () => {
  let component: ApplicantClassPreferencesComponent;
  let fixture: ComponentFixture<ApplicantClassPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantClassPreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantClassPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
