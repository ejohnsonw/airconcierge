import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineRebookComponent } from './airline-rebook.component';

describe('AirlineRebookComponent', () => {
  let component: AirlineRebookComponent;
  let fixture: ComponentFixture<AirlineRebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineRebookComponent]
    });
    fixture = TestBed.createComponent(AirlineRebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
