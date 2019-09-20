import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRangeGraphComponent } from './fund-range-graph.component';

describe('FundRangeGraphComponent', () => {
  let component: FundRangeGraphComponent;
  let fixture: ComponentFixture<FundRangeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundRangeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRangeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
