import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpQuaterlyImageGridComponent } from './up-quaterly-image-grid.component';

describe('UpQuaterlyImageGridComponent', () => {
  let component: UpQuaterlyImageGridComponent;
  let fixture: ComponentFixture<UpQuaterlyImageGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpQuaterlyImageGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpQuaterlyImageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
