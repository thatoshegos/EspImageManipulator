import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDisclaimerComponent } from './email-disclaimer.component';

describe('EmailDisclaimerComponent', () => {
  let component: EmailDisclaimerComponent;
  let fixture: ComponentFixture<EmailDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
