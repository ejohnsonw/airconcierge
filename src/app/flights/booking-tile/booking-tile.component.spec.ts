import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTileComponent } from './booking-tile.component';

describe('BookingTileComponent', () => {
  let component: BookingTileComponent;
  let fixture: ComponentFixture<BookingTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingTileComponent]
    });
    fixture = TestBed.createComponent(BookingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
