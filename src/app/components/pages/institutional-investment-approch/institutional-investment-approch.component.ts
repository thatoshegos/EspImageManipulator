import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-institutional-investment-approch",
  templateUrl: "./institutional-investment-approch.component.html",
  styleUrls: ["./institutional-investment-approch.component.css"]
})
export class InstitutionalInvestmentApprochComponent implements OnInit {
  @Input() investmentApproch;
  constructor() {}

  ngOnInit() {
  //  console.log(this.investmentApproch);
  }
}
