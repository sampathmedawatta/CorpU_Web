import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAvailabilityComponent } from './class-availability.component';

describe('ClassAvailabilityComponent', () => {
  let component: ClassAvailabilityComponent;
  let fixture: ComponentFixture<ClassAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
