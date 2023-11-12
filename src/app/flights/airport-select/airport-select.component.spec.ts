import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportSelectComponent } from './airport-select.component';

describe('AirportSelectComponent', () => {
  let component: AirportSelectComponent;
  let fixture: ComponentFixture<AirportSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportSelectComponent]
    });
    fixture = TestBed.createComponent(AirportSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
