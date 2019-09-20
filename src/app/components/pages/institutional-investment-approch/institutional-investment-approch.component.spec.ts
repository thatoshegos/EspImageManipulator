import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalInvestmentApprochComponent } from './institutional-investment-approch.component';

describe('InstitutionalInvestmentApprochComponent', () => {
  let component: InstitutionalInvestmentApprochComponent;
  let fixture: ComponentFixture<InstitutionalInvestmentApprochComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionalInvestmentApprochComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionalInvestmentApprochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
