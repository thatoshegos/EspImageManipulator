import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtFinancialAdviserComponent } from './thought-financial-adviser.component';

describe('ThoughtFinancialAdviserComponent', () => {
  let component: ThoughtFinancialAdviserComponent;
  let fixture: ComponentFixture<ThoughtFinancialAdviserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtFinancialAdviserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtFinancialAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
