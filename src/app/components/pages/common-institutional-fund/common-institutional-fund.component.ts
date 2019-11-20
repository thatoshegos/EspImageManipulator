import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { WPAPIService } from "../../../../services/wpapi.service";

@Component({
  selector: "app-common-institutional-fund",
  templateUrl: "./common-institutional-fund.component.html",
  styleUrls: ["./common-institutional-fund.component.css"]
})
export class CommonInstitutionalFundComponent implements OnInit {
  @Input() fundDatas;
  performancePdf = 'cms/wp-content/uploads/performance/fundperformance.pdf'
  constructor(private wpservice: WPAPIService, private router: Router) {}
  url;

  ngOnInit() {
    this.url = this.router.url.split("/");
  }
}
