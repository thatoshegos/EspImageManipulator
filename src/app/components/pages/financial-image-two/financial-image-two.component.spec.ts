import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialImageTwoComponent } from './financial-image-two.component';

describe('FinancialImageTwoComponent', () => {
  let component: FinancialImageTwoComponent;
  let fixture: ComponentFixture<FinancialImageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialImageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialImageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
