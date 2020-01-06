import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-instutional-financial-adviser",
  templateUrl: "./instutional-financial-adviser.component.html",
  styleUrls: ["./instutional-financial-adviser.component.css"]
})
export class InstutionalFinancialAdviserComponent implements OnInit {
  @Input() fadvisers;
  animationArr = ["fade-left", "fade-up", "fade-right", ""];
  constructor() {}

  ngOnInit() {
    window.scrollTo(0,0);
    //console.log(this.fadvisers);
  }
}
