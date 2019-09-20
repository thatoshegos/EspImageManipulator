import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconventionalThinkingComponent } from './unconventional-thinking.component';

describe('UnconventionalThinkingComponent', () => {
  let component: UnconventionalThinkingComponent;
  let fixture: ComponentFixture<UnconventionalThinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconventionalThinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconventionalThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
