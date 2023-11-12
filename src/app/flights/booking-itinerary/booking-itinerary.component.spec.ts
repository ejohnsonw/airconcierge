import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingItineraryComponent } from './booking-itinerary.component';

describe('BookingItineraryComponent', () => {
  let component: BookingItineraryComponent;
  let fixture: ComponentFixture<BookingItineraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingItineraryComponent]
    });
    fixture = TestBed.createComponent(BookingItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
