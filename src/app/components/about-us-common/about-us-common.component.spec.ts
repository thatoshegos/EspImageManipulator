import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCommonComponent } from './about-us-common.component';

describe('AboutUsCommonComponent', () => {
  let component: AboutUsCommonComponent;
  let fixture: ComponentFixture<AboutUsCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});