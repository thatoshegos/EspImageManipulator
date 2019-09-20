import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-common",
  templateUrl: "./common.component.html",
  styleUrls: ["./common.component.css"]
})
export class CommonComponent implements OnInit {
  @Input() fundDesign;
  @Input() independent;
  @Input() owners;
  @Input() history;
  @Input() our_culture;
  @Input() responsible;
  @Input() social_corporate;
  @Input() transformation;
  istrue = false;
  isActive = false;
  tabData;
  currentTab;
  showMoreData;
  constructor() {}

  ngOnInit() {
    if (this.responsible) {
      this.tabData = this.responsible.responsible_investing_tab[0];
      this.currentTab = "UNPRI";
    }
  }
  showData(status) {
    this.istrue = !status;
    this.showMoreData = this.owners;
  }
  getTabData(tabName, toggle) {
    console.log(this.responsible);

    if (tabName == "UNPRI") {
      this.tabData = this.responsible.responsible_investing_tab[0];
      this.currentTab = tabName;
      this.isActive = true;
    }/* else if (tabName == "corban_disclosure") {
      this.tabData = this.responsible.responsible_investing_tab[2];
      this.currentTab = tabName;
      this.isActive = true;
    }*/ else if (tabName == "proxy-voting") {
      this.tabData = this.responsible.responsible_investing_tab[1];
      this.currentTab = tabName;
      this.isActive = true;
    } else if (tabName == "conflict") {
      this.tabData = this.responsible.responsible_investing_tab[2];
      this.currentTab = tabName;
      this.isActive = true;
    }
    this.isActive = false;
  }
}
