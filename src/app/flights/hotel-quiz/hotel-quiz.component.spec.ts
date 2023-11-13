import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelQuizComponent } from './hotel-quiz.component';

describe('HotelQuizComponent', () => {
  let component: HotelQuizComponent;
  let fixture: ComponentFixture<HotelQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelQuizComponent]
    });
    fixture = TestBed.createComponent(HotelQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
