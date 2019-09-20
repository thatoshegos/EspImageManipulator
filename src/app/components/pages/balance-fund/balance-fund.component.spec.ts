import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BalanceFundComponent } from "./balance-fund.component";

describe("BalanceFundComponent", () => {
  let component: BalanceFundComponent;
  let fixture: ComponentFixture<BalanceFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceFundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
