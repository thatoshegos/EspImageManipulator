import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightYearwiseDataComponent } from './insight-yearwise-data.component';

describe('InsightYearwiseDataComponent', () => {
  let component: InsightYearwiseDataComponent;
  let fixture: ComponentFixture<InsightYearwiseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightYearwiseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightYearwiseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
