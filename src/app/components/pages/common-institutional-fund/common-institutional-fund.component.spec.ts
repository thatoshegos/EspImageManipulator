import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInstitutionalFundComponent } from './common-institutional-fund.component';

describe('CommonInstitutionalFundComponent', () => {
  let component: CommonInstitutionalFundComponent;
  let fixture: ComponentFixture<CommonInstitutionalFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInstitutionalFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInstitutionalFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
