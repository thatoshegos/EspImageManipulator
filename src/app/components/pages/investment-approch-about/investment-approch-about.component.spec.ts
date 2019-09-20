import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentApprochAboutComponent } from './investment-approch-about.component';

describe('InvestmentApprochAboutComponent', () => {
  let component: InvestmentApprochAboutComponent;
  let fixture: ComponentFixture<InvestmentApprochAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentApprochAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentApprochAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
