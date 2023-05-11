import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantUnitHistoryComponent } from './applicant-unit-history.component';

describe('ApplicantUnitHistoryComponent', () => {
  let component: ApplicantUnitHistoryComponent;
  let fixture: ComponentFixture<ApplicantUnitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantUnitHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantUnitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
