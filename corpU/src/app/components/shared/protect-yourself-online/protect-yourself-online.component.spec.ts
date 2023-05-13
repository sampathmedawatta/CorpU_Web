import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectYourselfOnlineComponent } from './protect-yourself-online.component';

describe('ProtectYourselfOnlineComponent', () => {
  let component: ProtectYourselfOnlineComponent;
  let fixture: ComponentFixture<ProtectYourselfOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectYourselfOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectYourselfOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
