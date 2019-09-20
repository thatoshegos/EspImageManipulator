import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTabComponent } from './fund-tab.component';

describe('FundTabComponent', () => {
  let component: FundTabComponent;
  let fixture: ComponentFixture<FundTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
