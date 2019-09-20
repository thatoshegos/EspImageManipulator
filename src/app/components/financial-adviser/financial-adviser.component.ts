import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-financial-adviser",
  templateUrl: "./financial-adviser.component.html",
  styleUrls: ["./financial-adviser.component.css"]
})
export class FinancialAdviserComponent implements OnInit {
  @Input() fadviser;
  animationArr = ["fade-left", "fade-up", "fade-right", ""];
  constructor() {}

  ngOnInit() {}
}
