import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurLeaderComponent } from './meet-our-leader.component';

describe('MeetOurLeaderComponent', () => {
  let component: MeetOurLeaderComponent;
  let fixture: ComponentFixture<MeetOurLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetOurLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetOurLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
