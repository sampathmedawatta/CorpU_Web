import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNavComponent } from './applicant-nav.component';

describe('ApplicantNavComponent', () => {
  let component: ApplicantNavComponent;
  let fixture: ComponentFixture<ApplicantNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
