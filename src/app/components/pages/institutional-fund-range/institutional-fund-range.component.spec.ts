import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalFundRangeComponent } from './institutional-fund-range.component';

describe('InstitutionalFundRangeComponent', () => {
  let component: InstitutionalFundRangeComponent;
  let fixture: ComponentFixture<InstitutionalFundRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionalFundRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionalFundRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
