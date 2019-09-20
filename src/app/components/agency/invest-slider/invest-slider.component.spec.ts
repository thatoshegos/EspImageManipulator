import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestSliderComponent } from './invest-slider.component';

describe('InvestSliderComponent', () => {
  let component: InvestSliderComponent;
  let fixture: ComponentFixture<InvestSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
