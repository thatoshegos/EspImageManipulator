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
  platformPdf= 'cms/wp-content/uploads/LISP platforms/LISP_Summary_sheet.pdf';
  url;
  allFundReturn: null;
  allBenchmarkReturn: null;
  allOutperformance: null;

  constructor(private wpservice: WPAPIService, private router: Router) {}

  // ngAfterContentChecked() {
  //   this.url = this.router.url.split("/")
  //   console.log('routering', this.url )
  // }

  ngOnInit() {
    // console.log('balance', this.getBalancedData )
    this.platformPdf = encodeURI(this.platformPdf);
    window.scrollTo(0,0);

    // this.wpservice
    //   .getCSVData("assets/images/balance_fund.csv")
    //   .subscribe(data => {
    //     console.log('dataAssets', data)
    //     this.csvData = data;
    //     this.getGraphData = this.makeDataSets(data);
    //     console.log('get', this.getGraphData)
    //      this.getConditionalCSV(4, 0)
    //   });
    /*this.wpservice.readCSVDataFromServer().subscribe(data => {
      console.log("readCSVDataFromServer========", data);
    });*/
   
    this.getConditionalCSV(0, 3)
     
    this.currentRoute = this.router.url.slice(1);
    this.url = this.router.url.split("/");
    // console.log('routeri', this.router.url)
    // console.log('route', this.router.url.split("/"))
    this.selectedRoute = "";
  }

  pdfUrl(type : string){
    let pdfMap: Object = {
      'equity-alpha-fund' :{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/equity_alpha_funds/' + year + '/current.pdf',
        quarterly_commentary: '/cms/wp-content/uploads/factsheets/equity_alpha_funds/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/equity_alpha_funds/' + year + '/Quartley Investment Report/current.pdf'
      },
      'balanced-fund':{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/balanced_allocation/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/balanced_allocation/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/balanced_allocation/' + year + '/Quartley Investment Report/current.pdf'
      },
      'top-40-tracker-fund':{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/top40/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/top40/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/top40/' + year + '/Quartley Investment Report/current.pdf'
      },
      'protector-fund':{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/protector/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/protector/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/protector/' + year + '/Quartley Investment Report/current.pdf'
      },
      'stable-fund':{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/stable/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/stable/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/stable/' + year + '/Quartley Investment Report/current.pdf'
      },
      'global-equity-fund':{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/global_balanced/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/global_balanced/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/global_balanced/' + year + '/Quartley Investment Report/current.pdf'
      },
      'global-equity-feeder-fund':{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/global_equity_feeder_fund/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/global_equity_feeder_fund/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/global_equity_feeder_fund/' + year + '/Quartley Investment Report/current.pdf'
      },
      'islamic-equity-fund':{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_equity/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/islamic_equity/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_equity/' + year + '/Quartley Investment Report/current.pdf'
      },
      'islamic-balanced-fund':{
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_balanced/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/islamic_balanced/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_balanced/' + year + '/Quartley Investment Report/current.pdf'
      },
      "islamic-high-yield-fund": {
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_high_yield_fund/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/islamic_high_yield_fund/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_high_yield_fund/' + year + '/Quartley Investment Report/current.pdf'
      },
      "islamic-global-equity-fund": {
        monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_global_equity_fund/' + year + '/current.pdf',
        quarterly_commentary:'/cms/wp-content/uploads/factsheets/islamic_global_equity_fund/' + year + '/Quarterly Summary/current.pdf',
        quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_global_equity_fund/' + year + '/Quartley Investment Report/current.pdf'
      },
      "islamic-global-equity-feeder-fund": {
         monthly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_global_equity_feeder_fund/' + year + '/current.pdf',
         quarterly_commentary:'/cms/wp-content/uploads/factsheets/islamic_global_equity_feeder_fund/' + year + '/Quarterly Summary/current.pdf',
         quarterly_fact_sheet: '/cms/wp-content/uploads/factsheets/islamic_global_equity_feeder_fund/' + year + '/Quartley Investment Report/current.pdf'
      }

    }

    const slug = this.getBalancedData.slug
    return  pdfMap[slug][type]
  }

  getConditionalCSV(years = null, index: number) {
    if (years != null) {
      let csvUrl = ''; 
      switch (index) {
        case 0:
          csvUrl = this.getBalancedData.acf.csv_file_graph
          break;
        case 1:
          csvUrl = this.getBalancedData.acf.csv_file
          break;
        case 2:
          csvUrl = this.getBalancedData.acf.ten_year_csv
          break;
        case 3:
          csvUrl = this.getBalancedData.acf.since_inception_csv
          break;
        default:
          break;
      }
      if (csvUrl !== ''){
        this.wpservice
        .readCSVDataFromServer(csvUrl)
        .subscribe(data => {
          this.csvData = JSON.parse(data);
          this.getGraphData = this.makeDataSetsFromJson(this.csvData, years);
        });
      } else {
        this.getGraphData =  null;
      }
      //this.createDataConditionalDataset(years);
      // this.getGraphData = this.makeDataSets(this.csvData, years);
      this.selectedIndex = index;
    }
  }
  createDataConditionalDataset(length) {
    // console.log(this.getGraphData);
  }

  makeDataSetsFromJson(data, cond = null) {
    // If cond argument is 0 graph get all years from data
    var lines = data.length;
    var yearCond = cond * 12;
    var showYear;
    var startingPoint;
    
    if (cond) {
      if (lines == yearCond) {
        showYear = lines; 
      } else if (lines > yearCond) {
        showYear = yearCond; 
        startingPoint = lines - yearCond; 
      } else {
        showYear = lines;
      }
    } else {
      showYear = lines;
    }
    
    if (startingPoint) {
      startingPoint = startingPoint - 1;
    } else {
      startingPoint = 0;
    }
    var graphDataSet = {
        dates: [],
        fundReturn: [],
        benchMark: [],
        valueFundReturn: [],
        valueBenchmarkReturn: [],
        valueOutperformance: []
    };
    
    for (var i = startingPoint; i < lines ; i++) {

      const element = data[i]
      // console.log('+++', data[i])
      graphDataSet.dates.push(element['DATE'])
      graphDataSet.benchMark.push(element['VAL2'])
      graphDataSet.fundReturn.push(element['VAL1'])
      graphDataSet.valueFundReturn.push(element['Fund Return'])
      graphDataSet.valueBenchmarkReturn.push(element['Benchmark Return'])
      graphDataSet.valueOutperformance.push(element['Outperformance'])

      if (element['Fund Return'] && this.allFundReturn !== null) {
        this.allFundReturn = element['Fund Return']
      }
      if (element['Benchmark Return'] && this.allBenchmarkReturn !== null) {
        this.allBenchmarkReturn = element['Benchmark Return']
      }

      if (element['Outperformance'] && this.allOutperformance !== null )  {
        this.allOutperformance = element['Outperformance'] 
      }
    };

   
    // var result = [];
    // var headers = lines[0].split(",");
    // var dates = [];
    // var fundReturn = [];
    // var benchMark = [];
    // var graphDataSet = {
    //   dates: null,
    //   fundReturn: null,
    //   benchMark: null
    // };
    // for (var i = startingPoint; i < lines.length - 1; i++) {
    //   var currentline = lines[i].split(",");
    //   dates.push(currentline[0]);
    //   fundReturn.push(currentline[1]);
    //   benchMark.push(currentline[2]);
    // }
    // graphDataSet.dates = dates;
    // graphDataSet.fundReturn = fundReturn;
    // graphDataSet.benchMark = benchMark;

    return graphDataSet;
  }
  // makeDataSets(data, cond = null) {
  //   // console.log("6565", data)
  //   var lines = data.split("\n");
  //   var yearCond = cond * 12;
  //   var showYear;
  //   var startingPoint;
  //   //console.log(lines);
  //   if (cond) {
  //     if (lines.length == yearCond) {
  //       showYear = lines.length;
  //     } else if (lines.length > yearCond) {
  //       showYear = yearCond;
  //       startingPoint = lines.length - yearCond;
  //     } else {
  //       showYear = lines.length;
  //     }
  //   } else {
  //     showYear = lines.length;
  //   }
    
  //   if (startingPoint) {
  //     startingPoint = startingPoint - 1;
  //   } else {
  //     startingPoint = 1;
  //   }
  //   var result = [];
  //   var headers = lines[0].split(",");
  //   var dates = [];
  //   var fundReturn = [];
  //   var benchMark = [];
  //   var graphDataSet = {
  //     dates: null,
  //     fundReturn: null,
  //     benchMark: null
  //   };
  //   for (var i = startingPoint; i < lines.length - 1; i++) {
  //     var currentline = lines[i].split(",");
  //     dates.push(currentline[0]);
  //     fundReturn.push(currentline[1]);
  //     benchMark.push(currentline[2]);
  //   }
  //   graphDataSet.dates = dates;
  //   graphDataSet.fundReturn = fundReturn;
  //   graphDataSet.benchMark = benchMark;

  //   return graphDataSet;
  // }
  getFundOnChange(e) {
    this.currentRoute = this.router.url;
    this.selectedRoute = e.target.value;
    this.router.navigate(["/" + e.target.value]);
  }
}
