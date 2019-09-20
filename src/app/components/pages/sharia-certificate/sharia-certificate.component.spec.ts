import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShariaCertificateComponent } from './sharia-certificate.component';

describe('ShariaCertificateComponent', () => {
  let component: ShariaCertificateComponent;
  let fixture: ComponentFixture<ShariaCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShariaCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShariaCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
