import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineFeedComponent } from './airline-feed.component';

describe('AirlineFeedComponent', () => {
  let component: AirlineFeedComponent;
  let fixture: ComponentFixture<AirlineFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineFeedComponent]
    });
    fixture = TestBed.createComponent(AirlineFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
