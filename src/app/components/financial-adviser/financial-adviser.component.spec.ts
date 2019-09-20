import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAdviserComponent } from './financial-adviser.component';

describe('FinancialAdviserComponent', () => {
  let component: FinancialAdviserComponent;
  let fixture: ComponentFixture<FinancialAdviserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialAdviserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
