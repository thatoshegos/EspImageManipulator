
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-complete-fund-range",
  templateUrl: "./complete-fund-range.component.html",
  styleUrls: ["./complete-fund-range.component.css"]
})
export class CompleteFundRangeComponent implements OnInit {
  @Input() tableDate;
  isHideConditionOn = false;
  visited;
  constructor() {}

  ngOnInit() {
    console.log('afdsfsdsdfsdf', this.tableDate)
    this.isHideConditionOn = this.tableDate.isInstitutionalCompleteFundRange;
    //console.log('ishide',this.isHideConditionOn)
    this.loadStorage();
  }

  selectQuarterly(fund, category, column) {
    let storageData = localStorage.getItem('visited')
    let dataForStorage = {}
    if (storageData){
      dataForStorage = JSON.parse(storageData)
      dataForStorage[this.makeVisitedKey(fund.fund_name, category, column)] = true
    } else {
      dataForStorage[this.makeVisitedKey(fund.fund_name, category, column)] = true
    }
    localStorage.setItem('visited', JSON.stringify(dataForStorage))
    this.loadStorage();
  }

  loadStorage() {
    let storageData = localStorage.getItem('visited')
    this.visited = storageData ? JSON.parse(storageData) : {}
  }

  makeVisitedKey(...args:any[] ) {
    return args.join('_')
  }
}
