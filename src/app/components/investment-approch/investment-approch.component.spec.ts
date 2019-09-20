import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentApprochComponent } from './investment-approch.component';

describe('InvestmentApprochComponent', () => {
  let component: InvestmentApprochComponent;
  let fixture: ComponentFixture<InvestmentApprochComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentApprochComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentApprochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
