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
  latestQuarterlyReport;
  latestQuarterlyCommentary;
  performancePdf = 'cms/wp-content/uploads/performance/fundperformance.pdf'
  constructor(private wpservice: WPAPIService, private router: Router) {}
  url;

  ngOnInit() {
    this.url = this.router.url.split("/");
    console.log('FUND DATAS', this.fundDatas, this.url)
    this.latestQuarterlyReport = this.fundDatas.acf.latest_quarterly_report
    this.latestQuarterlyCommentary = this.fundDatas.acf.latest_quarterly_commentary
  }
}
