import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-fund-range",
  templateUrl: "./fund-range.component.html",
  styleUrls: ["./fund-range.component.css"]
})
export class FundRangeComponent implements OnInit {
  @Input() FundRange;
  saFund = { title: "", desc: "", images: [] };
  glFund = { title: "", desc: "", images: [] };
  viewChangeflag = false;
  viewSChangeFlag = true;
    isInstitutionalFund = false;
  animation = [
    "fade-left",
    "fade-up",
    "fade-left",
    "fade-right",
    "fade-left",
    "fade-left"
  ];
  glfundLength;
  constructor() {}

  ngOnInit() {
    console.log(this.FundRange);
    this.isInstitutionalFund = this.FundRange.isInstitutionFundRange;
    this.saFund.title = this.FundRange.acf.south_african_fund_title;
    this.saFund.desc = this.FundRange.acf.south_african_fund_disc;
    this.saFund.images = this.FundRange.acf.south_african_fund_image;
    this.glFund.title = this.FundRange.acf.global_funds_title;
    this.glFund.desc = this.FundRange.acf.global_funds_discription;
    this.glFund.images = this.FundRange.acf.global_funds_image;
    this.glfundLength = this.FundRange.acf.south_african_fund_image.length;

    console.log(this.glfundLength);
    // console.log(this.glFund);
  }
  changeView() {
    this.viewChangeflag = false;
    this.viewSChangeFlag = true;
  }
  changeGView() {
    this.viewSChangeFlag = false;
    this.viewChangeflag = true;
  }
}
