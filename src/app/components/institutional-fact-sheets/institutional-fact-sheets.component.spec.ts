import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalFactSheetsComponent } from './institutional-fact-sheets.component';

describe('InstitutionalFactSheetsComponent', () => {
  let component: InstitutionalFactSheetsComponent;
  let fixture: ComponentFixture<InstitutionalFactSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionalFactSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionalFactSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
