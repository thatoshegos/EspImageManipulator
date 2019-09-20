import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-investment-approch",
  templateUrl: "./investment-approch.component.html",
  styleUrls: ["./investment-approch.component.css"]
})
export class InvestmentApprochComponent implements OnInit {
  @Input() investment;
  constructor() {}

  ngOnInit() {}
}
