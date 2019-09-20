import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastSliderComponent } from './podcast-slider.component';

describe('PodcastSliderComponent', () => {
  let component: PodcastSliderComponent;
  let fixture: ComponentFixture<PodcastSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
