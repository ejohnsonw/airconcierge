import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTileComponent } from './feed-tile.component';

describe('FeedTileComponent', () => {
  let component: FeedTileComponent;
  let fixture: ComponentFixture<FeedTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedTileComponent]
    });
    fixture = TestBed.createComponent(FeedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
