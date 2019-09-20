import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFreeInvestmentComponent } from './tax-free-investment.component';

describe('TaxFreeInvestmentComponent', () => {
  let component: TaxFreeInvestmentComponent;
  let fixture: ComponentFixture<TaxFreeInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxFreeInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFreeInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
