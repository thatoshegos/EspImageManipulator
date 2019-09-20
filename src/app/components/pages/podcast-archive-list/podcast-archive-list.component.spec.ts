import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastArchiveListComponent } from './podcast-archive-list.component';

describe('PodcastArchiveListComponent', () => {
  let component: PodcastArchiveListComponent;
  let fixture: ComponentFixture<PodcastArchiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastArchiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastArchiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
