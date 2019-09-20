import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRangeComponent } from './fund-range.component';

describe('FundRangeComponent', () => {
  let component: FundRangeComponent;
  let fixture: ComponentFixture<FundRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
