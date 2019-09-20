import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShariaBoardComponent } from './sharia-board.component';

describe('ShariaBoardComponent', () => {
  let component: ShariaBoardComponent;
  let fixture: ComponentFixture<ShariaBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShariaBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShariaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
