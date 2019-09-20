import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-institutional-fund-range",
  templateUrl: "./institutional-fund-range.component.html",
  styleUrls: ["./institutional-fund-range.component.css"]
})
export class InstitutionalFundRangeComponent implements OnInit {
  @Input() FundRange;
  saFund = { title: "", desc: "", images: [] };
  glFund = { title: "", desc: "", images: [] };
  msFund = { title: "", des: "", images: [] };
  viewChangeflag = false;
  viewSChangeFlag = "";
  viewSChangeMFlag = false;

  viewSAChange = true;
  viewMSChange = false;
  viewGLChange = false;

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
    this.viewSChangeFlag = "sa";
    this.isInstitutionalFund = this.FundRange.isInstitutionFundRange;
    this.saFund.title = this.FundRange.acf.south_african_fund_title;
    this.saFund.desc = this.FundRange.acf.south_african_fund_disc;
    this.saFund.images = this.FundRange.acf.south_african_fund_image;
    this.glFund.title = this.FundRange.acf.global_funds_title;
    this.glFund.desc = this.FundRange.acf.global_funds_discription;
    this.glFund.images = this.FundRange.acf.global_funds_image;
    this.glfundLength = this.FundRange.acf.south_african_fund_image.length;
    this.msFund.title = this.FundRange.acf["multi-asset_class_funds_title"];
    this.msFund.des = this.FundRange.acf["multi-asset_class_funds_desc"];
    this.msFund.images = this.FundRange.acf["multi-asset_class_funds_image"];

    console.log(this.msFund);
    // console.log(this.glFund);
  }
  changeView(status, current) {
    this.viewChangeflag = false;
    this.viewSChangeFlag = current;
    if (current == "sa") {
      this.viewSAChange = true;
      this.viewMSChange = false;
      this.viewGLChange = false;
    } else if (current == "ms") {
      this.viewSAChange = false;
      this.viewMSChange = true;
      this.viewGLChange = false;
    } else if (current == "gl") {
      this.viewSAChange = false;
      this.viewMSChange = false;
      this.viewGLChange = true;
    }
  }
  // changeGView() {
  //   this.viewSChangeFlag = false;
  //   this.viewChangeflag = true;
  // }
  // changeMView() {
  //   this.viewSChangeFlag = false;
  // }
}
