import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-financial-image-two",
  templateUrl: "./financial-image-two.component.html",
  styleUrls: ["./financial-image-two.component.css"]
})
export class FinancialImageTwoComponent implements OnInit {
  @Input() imageTwo;
  @Input() insightStatus;
  constructor() {}

  ngOnInit() {
    console.log(this.imageTwo)
  }
}
