import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiRatingComponent } from './emoji-rating.component';

describe('EmojiRatingComponent', () => {
  let component: EmojiRatingComponent;
  let fixture: ComponentFixture<EmojiRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
