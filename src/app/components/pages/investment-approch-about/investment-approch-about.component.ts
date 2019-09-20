import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-investment-approch-about",
  templateUrl: "./investment-approch-about.component.html",
  styleUrls: ["./investment-approch-about.component.css"]
})
export class InvestmentApprochAboutComponent implements OnInit {
  @Input() investments;
  constructor() {}

  ngOnInit() {}
}
