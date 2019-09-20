import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-common-institutional-fund",
  templateUrl: "./common-institutional-fund.component.html",
  styleUrls: ["./common-institutional-fund.component.css"]
})
export class CommonInstitutionalFundComponent implements OnInit {
  @Input() fundDatas;
  constructor() {}

  ngOnInit() {}
}
