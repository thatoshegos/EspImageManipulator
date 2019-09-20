
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-complete-fund-range",
  templateUrl: "./complete-fund-range.component.html",
  styleUrls: ["./complete-fund-range.component.css"]
})
export class CompleteFundRangeComponent implements OnInit {
  @Input() tableDate;
  isHideConditionOn = false;
  constructor() {}

  ngOnInit() {
    this.isHideConditionOn = this.tableDate.isInstitutionalCompleteFundRange;
    console.log(this.tableDate);
  }
}