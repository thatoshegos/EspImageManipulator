import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpQuaterlyLibraryComponent } from './up-quaterly-library.component';

describe('UpQuaterlyLibraryComponent', () => {
  let component: UpQuaterlyLibraryComponent;
  let fixture: ComponentFixture<UpQuaterlyLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpQuaterlyLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpQuaterlyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
