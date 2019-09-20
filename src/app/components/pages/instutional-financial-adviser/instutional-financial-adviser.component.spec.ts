import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstutionalFinancialAdviserComponent } from './instutional-financial-adviser.component';

describe('InstutionalFinancialAdviserComponent', () => {
  let component: InstutionalFinancialAdviserComponent;
  let fixture: ComponentFixture<InstutionalFinancialAdviserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstutionalFinancialAdviserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstutionalFinancialAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
