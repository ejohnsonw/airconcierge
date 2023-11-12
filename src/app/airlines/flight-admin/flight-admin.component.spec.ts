import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAdminComponent } from './flight-admin.component';

describe('FlightAdminComponent', () => {
  let component: FlightAdminComponent;
  let fixture: ComponentFixture<FlightAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightAdminComponent]
    });
    fixture = TestBed.createComponent(FlightAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
