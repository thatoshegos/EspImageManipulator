import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-about-us-common",
  templateUrl: "./about-us-common.component.html",
  styleUrls: ["./about-us-common.component.css"]
})
export class AboutUsCommonComponent implements OnInit {
  @Input() deeplyThink;
  constructor() {}

  ngOnInit() {
    // console.log();
    // if (typeof this.deeplyThink.isAboutUsResponsibleInvesting != undefined) {
    //   this.deeplyThink.title = this.deeplyThink.acf.responsible_investing_title;
    //   this.deeplyThink.content = this.deeplyThink.acf.responsible_investing_content;
    //   this.deeplyThink.investingTab = this.deeplyThink.acf.responsible_investing_tab;
    // }
  }
}
