import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteFundRangeComponent } from './complete-fund-range.component';

describe('CompleteFundRangeComponent', () => {
  let component: CompleteFundRangeComponent;
  let fixture: ComponentFixture<CompleteFundRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteFundRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteFundRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
