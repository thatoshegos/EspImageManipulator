import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "../../../../../services/wpapi.service";

import { from } from "rxjs";
@Component({
  selector: "app-fund-tab",
  templateUrl: "./fund-tab.component.html",
  styleUrls: ["./fund-tab.component.css"]
})
export class FundTabComponent implements OnInit {
  constructor(private wpservice: WPAPIService) {}
  @Input() getApiData;
  getTabDateSet;
  getSelected;
  getPriceData;
  getHeader;
  latestPrice;
  endPrice;

  ngOnInit() {
    this.getSelected = "overview";

    this.getTabDateSet = this.getApiData.acf.overview;
  }
  ngAfterViewInit() {
    console.log(this.getApiData);
  }

  getTabData(clicked, data) {
    var keys = Object.keys(this.getApiData.acf);
    keys.map(key => {
      if (key == clicked) {
        if (clicked == "prices") {
          this.getTabDateSet = null;

          this.getPriceData = { isPrice: false, data: null };
          this.wpservice
            .readCSVDataFromServer(`${this.getApiData.acf.prices}`)
            .subscribe(data => {
              this.getPriceData.data = JSON.parse(data);
              this.getPriceData.isPrice = true;

              this.endPrice = this.getPriceData.data[0].Price;
              console.log(this.latestPrice);
              this.latestPrice = this.getPriceData.data[
                this.getPriceData.data.length - 1
              ].Price;

              this.getHeader = Object.keys(this.getPriceData.data[0]);
            });
        } else {
          this.getPriceData = null;
          this.getTabDateSet = this.getApiData.acf[key];
        }
      }
    });
    this.getSelected = clicked;
  }

  // getCSVByParent(data) {
  //   if (data.equityAlphaStatus && data.getParent == "individual-investor") {
  //     return "assets/data/prices/individual-equity-price.csv";
  //   } else if (
  //     data.balaceFundStatus &&
  //     data.getParent == "individual-investor"
  //   ) {
  //     return "assets/data/prices/sample_export_15593344736071.csv";
  //   } else if (
  //     data.protectorStatus &&
  //     data.getParent == "individual-investor"
  //   ) {
  //     return "assets/data/prices/individual-protector.csv";
  //   } else if (
  //     data.globalEquityStatus &&
  //     data.getParent == "individual-investor"
  //   ) {
  //     return "assets/data/prices/individual-global-equity-price.csv";
  //   } else if (
  //     data.globalEquityFeederStatus &&
  //     data.getParent == "individual-investor"
  //   ) {
  //     return "assets/data/prices/individual-global-equity-price.csv";
  //   }
  //   //sharia investors
  //   else if (data.islamicEquityStatus && data.getParent == "sharia-investor") {
  //     return "assets/data/prices/sharia-islamic-equity.csv";
  //   } else if (
  //     data.islamicbalancedStatus &&
  //     data.getParent == "sharia-investor"
  //   ) {
  //     return "assets/data/prices/sharia-islamic-balanced-fund.csv";
  //   } else if (
  //     data.islamicHighYieldStatus &&
  //     data.getParent == "sharia-investor"
  //   ) {
  //     return "assets/data/prices/sharia-islamic-high-yeild-fund.csv";
  //   } else if (
  //     data.islamicGlobalEquityStatus &&
  //     data.getParent == "sharia-investor"
  //   ) {
  //     return "assets/data/prices/sharia-islamic-global-equity-price.csv";
  //   } else if (
  //     data.islamicGlobalEquityFeederStatus &&
  //     data.getParent == "sharia-investor"
  //   ) {
  //     return "assets/data/prices/sharia-islamic-global-equity-feeder-price.csv";
  //   }
  //   // Institutional fund
  //   else if (
  //     data.isInstitutionalEquityStatus &&
  //     data.getParent == "institutional-investor"
  //   ) {
  //     return "assets/data/prices/institutional-equity-price.csv";
  //   } else if (
  //     data.isInstitutionalBondStatus &&
  //     data.getParent == "institutional-investor"
  //   ) {
  //     return "assets/data/prices/institutional-bond-font-price.csv";
  //   } else if (
  //     data.isInstitutionalMoneyStatus &&
  //     data.getParent == "institutional-investor"
  //   ) {
  //     return "assets/data/prices/institutional-money-price.csv";
  //   } else if (
  //     data.isInstitutionalProtectorStatus &&
  //     data.getParent == "institutional-investor"
  //   ) {
  //     return "assets/data/prices/institutional-protected-price.csv";
  //   } else if (
  //     data.isStableStatus &&
  //     data.getParent == "institutional-investor"
  //   ) {
  //     return "assets/data/prices/institutional-stable-fund-price.csv";
  //   } else if (
  //     data.topFortyTrackerStatus &&
  //     data.getParent == "individual-investor"
  //   ) {
  //     return "assets/data/prices/institutional-stable-fund-price.csv";
  //   } else if (
  //     data.isdomesticFundStatus &&
  //     data.getParent == "institutional-investor"
  //   ) {
  //     return "assets/data/prices/institutional-stable-fund-price.csv";
  //   } else if (
  //     data.isGlobalFundInstitutionalStatus &&
  //     data.getParent == "institutional-investor"
  //   ) {
  //     return "assets/data/prices/institutional-stable-fund-price.csv";
  //   }

  //   // console.log(data);
  // }
}
