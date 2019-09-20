import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactSheetArchiveComponent } from './fact-sheet-archive.component';

describe('FactSheetArchiveComponent', () => {
  let component: FactSheetArchiveComponent;
  let fixture: ComponentFixture<FactSheetArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactSheetArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactSheetArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
