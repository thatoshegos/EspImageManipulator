import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-about-menu",
  templateUrl: "./about-menu.component.html",
  styleUrls: ["./about-menu.component.css"]
})
export class AboutMenuComponent implements OnInit {
  @Input() CurrentTab;
  constructor() {}

  ngOnInit() {
    //console.log(this.CurrentTab);
  }
}
