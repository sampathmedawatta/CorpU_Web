import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyViewComponent } from './vacancy-view.component';

describe('VacancyViewComponent', () => {
  let component: VacancyViewComponent;
  let fixture: ComponentFixture<VacancyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
