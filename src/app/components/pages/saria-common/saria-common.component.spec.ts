import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SariaCommonComponent } from './saria-common.component';

describe('SariaCommonComponent', () => {
  let component: SariaCommonComponent;
  let fixture: ComponentFixture<SariaCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SariaCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SariaCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
