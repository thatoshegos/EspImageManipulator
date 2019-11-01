import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { WPAPIService } from "../../../../services/wpapi.service";
import { DatePipe } from "@angular/common";

const year = new Date().getFullYear();

@Component({
  selector: "app-balance-fund",
  templateUrl: "./balance-fund.component.html",
  styleUrls: ["./balance-fund.component.css"]
})
export class BalanceFundComponent implements OnInit {
  @Input() getStatus;
  @Input() getBalancedData;
  getGraphData;
  currentRoute;
  selectedRoute;
  csvData;
  selectedIndex;

  constructor(private wpservice: WPAPIService, private router: Router) {}

  ngOnInit() {
    /*this.wpservice.readCSVDataFromServer().subscribe(data => {
      console.log("readCSVDataFromServer========", data);
    });*/
    this.wpservice
      .getCSVData("assets/images/balance_fund.csv")
      .subscribe(data => {
        this.csvData = data;
        this.getGraphData = this.makeDataSets(data);
        this.getConditionalCSV(4, 3)
      });
    this.currentRoute = this.router.url.slice(1);
    this.selectedRoute = "";
  }

  pdfUrl(type : string){
    let pdfMap: Object = {
      'equity-alpha-fund' :{
        monthly_fact_sheet: '/wp-content/uploads/factsheets/equity_alpha_funds/' + year + '/current.pdf',
        quarterly_commentary: '/wp-content/uploads/factsheets/equity_alpha_funds/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/wp-content/uploads/factsheets/equity_alpha_funds/' + year + '/Quartley Investment Report/current.pdf'
      },
      'balanced-fund':{
        monthly_fact_sheet: '/wp-content/uploads/factsheets/balanced_allocation/' + year + '/current.pdf',
        quarterly_commentary:'/wp-content/uploads/factsheets/balanced_allocation/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/wp-content/uploads/factsheets/balanced_allocation/' + year + '/Quartley Investment Report/current.pdf'
      },
      'top-40-tracker-fund':{
        monthly_fact_sheet: '/wp-content/uploads/factsheets/top40/' + year + '/current.pdf',
        quarterly_commentary:'/wp-content/uploads/factsheets/top40/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/wp-content/uploads/factsheets/top40/' + year + '/Quartley Investment Report/current.pdf'
      },
      'protector-fund':{
        monthly_fact_sheet: '/wp-content/uploads/factsheets/protector/' + year + '/current.pdf',
        quarterly_commentary:'/wp-content/uploads/factsheets/protector/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/wp-content/uploads/factsheets/protector/' + year + '/Quartley Investment Report/current.pdf'
      },
      'stable-fund':{
        monthly_fact_sheet: '/wp-content/uploads/factsheets/stable/' + year + '/current.pdf',
        quarterly_commentary:'/wp-content/uploads/factsheets/stable/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/wp-content/uploads/factsheets/stable/' + year + '/Quartley Investment Report/current.pdf'
      }

    }

    const slug = this.getBalancedData.slug
    return  pdfMap[slug][type]
  }

  getConditionalCSV(years = null, index: number) {
    if (years != null) {
      //this.createDataConditionalDataset(years);
      this.getGraphData = this.makeDataSets(this.csvData, years);
      this.selectedIndex = index;
    }
  }
  createDataConditionalDataset(length) {
    // console.log(this.getGraphData);
  }
  makeDataSets(data, cond = null) {
    var lines = data.split("\n");
    var yearCond = cond * 12;
    var showYear;
    var startingPoint;
    //console.log(lines);
    if (cond) {
      if (lines.length == yearCond) {
        showYear = lines.length;
      } else if (lines.length > yearCond) {
        showYear = yearCond;
        startingPoint = lines.length - yearCond;
      } else {
        showYear = lines.length;
      }
    } else {
      showYear = lines.length;
    }
    
    if (startingPoint) {
      startingPoint = startingPoint - 1;
    } else {
      startingPoint = 1;
    }
    var result = [];
    var headers = lines[0].split(",");
    var dates = [];
    var fundReturn = [];
    var benchMark = [];
    var graphDataSet = {
      dates: null,
      fundReturn: null,
      benchMark: null
    };
    for (var i = startingPoint; i < lines.length - 1; i++) {
      var currentline = lines[i].split(",");
      dates.push(currentline[0]);
      fundReturn.push(currentline[1]);
      benchMark.push(currentline[2]);
    }
    graphDataSet.dates = dates;
    graphDataSet.fundReturn = fundReturn;
    graphDataSet.benchMark = benchMark;

    return graphDataSet;
  }
  getFundOnChange(e) {
    this.currentRoute = this.router.url;
    this.selectedRoute = e.target.value;
    this.router.navigate(["/" + e.target.value]);
  }
}
