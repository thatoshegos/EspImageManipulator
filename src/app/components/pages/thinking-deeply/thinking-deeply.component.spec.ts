import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkingDeeplyComponent } from './thinking-deeply.component';

describe('ThinkingDeeplyComponent', () => {
  let component: ThinkingDeeplyComponent;
  let fixture: ComponentFixture<ThinkingDeeplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkingDeeplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkingDeeplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
